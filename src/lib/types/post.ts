export type Post = {
    title: string;
    date: string;
    description: string;
    tags: string[];
    image: string;
    content: string;
    wordCount: number;
    slug: string;
    next?: Post;
    prev?: Post;
};