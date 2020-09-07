<script>
	import { setContext } from 'svelte'
	
	let payload = false
	let timeout

	const hide = () => {
		timeout && clearTimeout(timeout)		
		payload = false
	}
	const show = val => {
		payload = val
		timeout && clearTimeout(timeout)
		timeout = setTimeout(hide, 3000)
	}

	setContext('notification-show', show)	
</script>

{#if payload}
	<slot name="notification" {hide} payload={payload} />
{/if}

<slot />
