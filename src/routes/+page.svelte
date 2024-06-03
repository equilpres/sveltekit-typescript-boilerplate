<script lang="ts">
	import Example from '$lib/components/Example.svelte';

	import { exampleStore } from '$lib/stores/example';
</script>

<div class="text-xl">
	{$exampleStore.text} x <Example />
</div>
