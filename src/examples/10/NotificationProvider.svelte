<script>
	import { setContext } from 'svelte'
	
	let payload = false
	const hide = () => payload = false
	const show = val => payload = val
	
	setContext('notification-show', show)	
</script>

{#if payload}
	<slot name="notification" {hide} payload={payload} />
{/if}

<slot />
