import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import { mdsvex } from 'mdsvex'
import json from '@rollup/plugin-json'

const production = !process.env.ROLLUP_WATCH

function serve() {
	let server
	
	function toExit() {
		if (server) server.kill(0)
	}

	return {
		writeBundle() {
			if (server) return
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			})

			process.on('SIGTERM', toExit)
			process.on('exit', toExit)
		}
	}
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		json(),
		svelte({
			dev: !production,
			css: css => {
				css.write('bundle.css')
			},
			extensions: [".svelte", ".svx"],
			preprocess: mdsvex({
				layout: "./src/_svx-layout.svelte"
			})
		}),
		resolve({
			browser: true,
			dedupe: ['svelte', 'svx']
		}),
		commonjs(),

		!production && serve(),
		!production && livereload('public'),

		production && terser()
	],
	watch: {
		clearScreen: false
	}
}
