<script>
	import { onMount } from 'svelte'
	import Navigation from './components/Navigation.svelte'

	import pages from './pages.js'

	let current = {}
	let _current
	$: _current = current ? current : _current
</script>

<style>
	main {		
		background-color: hsl(var(--hue), 100%, 90%);
		border: 2px solid hsl(var(--hue), 100%, 30%);
		border-radius: .25em;
		color: black;
		_color: hsl(var(--hue), 100%, 20%);	
		flex: 1 0;
		margin: .5em;
		margin-top: 0;
		padding: 1em;
	}
</style>

<Navigation bind:current {pages}/>

{#if _current}
	<main style="--hue: {_current.hue}">
		<svelte:component this={_current.component}></svelte:component>
	</main>
{/if}
