import { PUBLIC_EXAMPLE } from '$env/static/public';

import { writable } from 'svelte/store';

export const exampleStore = writable({
	text: PUBLIC_EXAMPLE,
	createdAt: new Date().toISOString(),
});
