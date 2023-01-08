import relativeImages from 'mdsvex-relative-images';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeImgSize from 'rehype-img-size'

export default {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [relativeImages],
	rehypePlugins: [
		[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		rehypeSlug,
		[rehypeImgSize, { dir: 'static' }],
		[rehypeAutolinkHeadings, { behavior: 'wrap' }]
	]
};
