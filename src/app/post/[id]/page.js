import { notFound } from 'next/navigation';

import Post from '@/components/Post';
import { FeedProvider } from '@/components/posts/FeedVideoPlayer/FeedContext';

async function getData(id) {
    const res = await fetch(`http://localhost:1337/api/posts/${id}?populate=*`);
    
    const data = await res.json();
    return data.data?.attributes;
}

export default async function PostPage({ params }) {
    const post = await getData(params.id);

    if (!post) {
        return notFound();
    }

    return post ? (
        <main className="px-8 mx-auto">
            <FeedProvider>
                <Post post={post} />
            </FeedProvider>
        </main>
    ) : <main />
}