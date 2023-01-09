export type Post = {
    title: string;
    date: string;
    description: string;
    updated?: string;
    tags: string[];
    image: string;
    content: string;
    wordCount: number;
    draft?: boolean;
    slug: string;
    next?: Post;
    prev?: Post;
};