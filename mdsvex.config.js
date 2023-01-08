import remarkPlugins from './src/plugins/remark/index.js';
import rehypePlugins from './src/plugins/rehype/index.js';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeImgSize from 'rehype-img-size'

export default {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [...Object.values(remarkPlugins)],
	rehypePlugins: [
		[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		...Object.values(rehypePlugins),
		rehypeSlug,
		[rehypeImgSize, { dir: 'static' }],
		[rehypeAutolinkHeadings, {
			behavior: 'append', content: getLinkIcon()
		}]
	]
};

function getLinkIcon() {
	return {
		type: 'element',
		tagName: 'svg',
		properties: {
			xmlns: 'http://www.w3.org/2000/svg',
			fill: 'none',
			viewBox: '0 0 24 24',
			'stroke-width': '1.5',
			stroke: 'currentColor',
			class: 'w-6 h-6',
		},
		children: [
			{
				type: 'element',
				tagName: 'path',
				properties: {
					'stroke-linecap': 'round',
					'stroke-linejoin': 'round',
					d: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244',
				},
				children: [],
			},
		],
	}
}