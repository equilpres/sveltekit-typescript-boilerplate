import { json } from '@sveltejs/kit';

export function GET(): Response {
	return json({
		ok: true,
	});
}
