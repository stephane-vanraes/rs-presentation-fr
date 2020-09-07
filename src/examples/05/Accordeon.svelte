<script>
	export let header
	
	let isOpen = false
	const toggle = () => isOpen = !isOpen
</script>

<div>
	<button on:click={toggle}>{header}</button>
	{#if isOpen}
		<slot />
	{/if}
</div>

<style>
	div {
		margin: 0;
	}
	button {
		border: 1px solid #ced4da;
		border-bottom: 0;
		cursor: pointer;
		display: block;
        font-size: 1em;
		margin: 0;
		padding: .25em;
		width: 100%;
	}
</style>