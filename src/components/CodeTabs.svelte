<script>
    import { TabControl, TabControlItem } from 'renderless-svelte'

    export let items = []
</script>

<style>
    button {
		--sat: 100%;
		--lum1: 80%;
		--lum2: 30%;
		background-color: white;
		border: 2px solid hsl(var(--hue), var(--sat), var(--lum2));
		border-radius: .5em;
		color: black;
		cursor: pointer;
        flex: 1 0;
        font-size: 1em;
		padding: .5em;
    }
	button:focus,
	button:hover {
		--lum1: 40%;
		--lum2: 95%;
		outline: none;
	}
    button + button {
        margin-left: 1rem;
    }
</style>

<TabControl>
    <div slot="tabs" let:tabs>
        {#each tabs as { active, payload, select }}
            <button class:active on:click="{select}">{payload}</button>
        {/each}
    </div>
    {#each items as { label, code }, id}
        <TabControlItem {id} payload={label}>
            <svelte:component this={code}></svelte:component>
        </TabControlItem>
    {/each}
</TabControl>
