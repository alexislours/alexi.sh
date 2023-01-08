import relativeImages from 'mdsvex-relative-images';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeImgSize from 'rehype-img-size'
import supersub from 'remark-supersub';
import remarkToc from 'remark-toc';

export default {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [relativeImages, supersub, remarkToc],
	rehypePlugins: [
		[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		rehypeSlug,
		[rehypeImgSize, { dir: 'static' }],
		[rehypeAutolinkHeadings, { behavior: 'wrap' }]
	]
};
