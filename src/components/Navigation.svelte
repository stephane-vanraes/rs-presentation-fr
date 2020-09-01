<script>
	import { scale } from 'svelte/transition'
	import { writable } from 'svelte/store'
	import { tweened } from 'svelte/motion'
	import { onMount } from 'svelte'

	export let pages;
	export const currentIndex = tweened(0, { duration: 500 })

	export let current
	$: current = pages[$currentIndex]

	let show = false
	onMount(() => show = true)
</script>

<style>
	nav {
		display: flex;
		padding: .5em;
		padding-bottom: 0;
	}
	nav > div {
		--sat: 100%;
		--lum1: 80%;
		--lum2: 30%;
		display: flex;
		flex: 1 0;
		flex-direction: column;
		margin: .25rem;
	}
	nav > div.current {
		--hue: 210 !important;
	}
	nav > div.past {
		--sat: 0%;
	}
	button {
		background-color: hsl(var(--hue), var(--sat), var(--lum1));
		border: 2px solid hsl(var(--hue), var(--sat), var(--lum2));
		border-radius: .5em;
		color: hsl(var(--hue), var(--sat), var(--lum2));
		cursor: pointer;
		flex: 1 0;
		margin-bottom: .25rem;
		padding: .5em;
	}
	button + button {
		margin-left: .5em;
	}
	button:focus,
	button:hover {
		--lum1: 40%;
		--lum2: 95%;
		outline: none;
	}
	div.current {
		--hue: 210 !important;
	}
	div.past {
		--sat: 0%;
	}

	.line {
		background-color: transparent;
		height: 3px;
		margin: 0 .25rem;
		width: calc(100% - .5rem);
	}
	button:hover + .line,
	div.current > .line {
		background-color: hsl(var(--hue), var(--sat), var(--lum2));
	}
</style>

<nav>
	{#if show}
	{#each pages as page, idx (page.id)}
	<div class:current={$currentIndex === idx}
		 class:past={$currentIndex > idx}
		 style="--hue: {page.hue}">
		<button on:click="{() => currentIndex.set(idx)}"
				in:scale={{ duration: 100, delay: 50*idx }}>
			{idx+1}
		</button>
		<div class="line" />
	</div>
	{/each}
	{/if}
</nav>