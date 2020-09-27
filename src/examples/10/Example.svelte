<script>
	import { fly } from 'svelte/transition'
	import NotificationProvider from './NotificationProvider.svelte'
	import Smurfs from './Smurfs.svelte'
</script>

<NotificationProvider>
	<div in:fly={{ x: 500 }} slot="notification" class="notification" let:hide let:payload>
		<button on:click={hide}>&times;</button>
		<span>{payload}</span>
	</div>
	<Smurfs />
</NotificationProvider>

<style>
	.notification {
		background-color: hsl(40, 100%, 80%);
		border-color: hsl(40, 100%, 30%);
		border-radius: .5rem 0 0 .5rem;
		border-style: solid;
		border-width: 2px 0 2px 2px;
		color: black;
		margin: 0;
		padding: .5rem;
		position: fixed;
		top: 4rem;
		right: 0;
		height: 100px;
		width: 33%;
	}
	.notification > button {
		color: inherit;
		cursor: pointer;
		position: absolute;
		right: .5rem;
		line-height: 1.25rem;
		top: .5rem;
		border: 0;
		background: transparent;
		font-size: 2rem;
		font-weight: 600;
		margin: 0;
		padding: 0;
	}
	.notification > button:active,
	.notification > button:hover,
	.notification > button:focus {
		outline: none;
	}
</style>