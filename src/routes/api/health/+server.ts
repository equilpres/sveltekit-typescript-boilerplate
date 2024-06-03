import { json } from '@sveltejs/kit';

export function GET({ request }) {
	request;

	return json({
		ok: true,
	});
}
