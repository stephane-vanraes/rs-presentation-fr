<script>
	import { getContext } from 'svelte'
	import { smurfs } from '../../data.json'
    
	const show = getContext('notification-show')
</script>

<div>
	{#each smurfs as smurf}		
		<div class="image" on:click="{() => show(`C'est ${smurf.name}`)}">
			<img src="{smurf.image}" alt="">
		</div>
	{/each}
</div>

<style>
	div {
		display: flex;
	}
	.image {
		background-color: white;
		border: 2px solid hsl(var(--hue), 100%, 30%);
		border-radius: .5em;
		display: flex;
		align-items: center;
		flex: 1 0 200px;
		flex-direction: column;
		height: 200px;
		padding: .5em;
		margin: .5rem;
		width: 200px;
	}
	img {
		height: 180px;
	}
</style>