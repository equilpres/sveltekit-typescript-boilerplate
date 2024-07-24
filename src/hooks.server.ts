import { dev } from '$app/environment';

import type { Handle } from '@sveltejs/kit';
import { minify, type Options } from 'html-minifier-terser';

export function handle({ event, resolve }): ReturnType<Handle> {
	let page = '';

	return resolve(event, {
		transformPageChunk: ({ html, done }) => {
			page += html;

			if (done) {
				return dev ? page : minify(page, minifyOptions());
			}
		},
	});
}

function minifyOptions(): Options {
	return {
		caseSensitive: true,
		collapseBooleanAttributes: true,
		collapseInlineTagWhitespace: true,
		collapseWhitespace: true,
		customEventAttributes: [],
		decodeEntities: true,
		ignoreCustomComments: [],
		ignoreCustomFragments: [],
		minifyCSS: true,
		minifyJS: true,
		removeAttributeQuotes: true,
		removeOptionalTags: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		sortAttributes: true,
		sortClassName: true,
		useShortDoctype: true,
	};
}
