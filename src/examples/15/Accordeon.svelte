<script>
	import { setContext } from 'svelte'
	
	let current = false
	
	setContext('accordeon', {
		setCurrent: fn => {
			current && current !== fn && current()
			current = fn
		}
	})
</script>

<slot />
