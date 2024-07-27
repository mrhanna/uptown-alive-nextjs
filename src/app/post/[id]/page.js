import { notFound } from 'next/navigation';

import Post from '@/components/posts/Post';

async function getData(id) {
    const res = await fetch(`http://localhost:1337/api/posts/${id}?populate=*`);
    
    const data = await res.json();
    return data.data?.attributes;
}

export default async function PostPage({ params }) {
    const post = await getData(params.id);
    console.log(post);

    if (!post) {
        return notFound();
    }

    return post ? (
        <main className="mt-32">
            <Post post={post} />
        </main>
    ) : <main />
}