<script lang="ts">
	import { onMount } from 'svelte';

	let date = new Date();

	$: hours = date.getHours();
	$: minutes = date.getMinutes();
	$: seconds = date.getSeconds();

	const pad = (value: number) => {
		return `${value}`.padStart(2, '0');
	};

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 100);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{pad(hours)}:{pad(minutes)}:{pad(seconds)}
