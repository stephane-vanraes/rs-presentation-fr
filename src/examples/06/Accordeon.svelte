<script>
	export let isOpen = false
	
	const close = () => isOpen = false
	const toggle = () => isOpen = !isOpen	
</script>

<slot name="header" {toggle} {isOpen} />
{#if isOpen}
	<slot />
{/if}
