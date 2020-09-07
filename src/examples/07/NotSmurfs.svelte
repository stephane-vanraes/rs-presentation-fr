<script>
	import { slide } from 'svelte/transition'
	import Accordeon from './Accordeon.svelte'
	import { notSmurfs } from '../../data.json'
</script>

{#each notSmurfs as notSmurf}
	<Accordeon let:toggle let:isOpen>
		<button class:isOpen slot="header" on:click={toggle}>{notSmurf.name}</button>
		<div in:slide>
			<div class="content">
				<h3>{notSmurf.name}</h3>
				<p>{notSmurf.description}</p>
			</div>		
            <div class="image">
				<img src="{notSmurf.image}" alt="{notSmurf.name}">
			</div>
		</div>
	</Accordeon>
{/each}

<style>	
	button {
		background-color: black;
		border: 0;
		color: white;
		cursor: pointer;
		display: block;
		font-size: 1em;
        margin: 0;
        padding: .5rem;
		position: relative;
		width: 100%;
    }
	button:before {
		height: 0;
		border: 20px solid transparent;
		content: '';
		position: absolute;
		left: 10px;
		width: 0; 
	}
	button:active,
	button:hover,
	button:focus {
		outline: none;
	}
	div {
		background-color: hsl(0, 0%, 80%);
		border: 2px solid black;
		display: flex;
        padding: 1rem;
        margin: 0;
	}
	.content {
		border: 0;
		flex-direction: column;
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
		width: 200px;
	}
	img {
		height: 180px;
	}
	h3 {
		margin: 0;
	}
</style>
