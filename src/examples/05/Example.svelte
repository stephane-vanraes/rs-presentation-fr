<script>
    import { slide } from 'svelte/transition'
	import Accordeon from './Accordeon.svelte'
	import { smurfs } from '../../data.json'
</script>

{#each smurfs as { description, name, image }}
    <Accordeon header="{name}">

        <div in:slide out:slide>
            <div class="image">
				<img src="{image}" alt="{name}">
			</div>

            <div class="content">
                <h3>{name}</h3>
				<p>{description}</p>
            </div>
        </div>

    </Accordeon>
{/each}

<style>
	div {
		display: flex;
        padding: 1rem;
        margin: 0;
	}
	.content {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
		padding: .5rem;
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
