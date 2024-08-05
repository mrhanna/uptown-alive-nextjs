import React from 'react';

import PostExcerpt from './PostExcerpt';
import FeedProvider from './posts/FeedVideoPlayer/FeedProvider';

import { strapiFlatten } from '@/api/StrapiHelper';

async function getData(businessId) {
    const res = await fetch(`http://localhost:1337/api/posts?populate=*${businessId ? `&filters[businesses][id][$eq]=${businessId}` : ''}`);
    
    const data = await res.json();
    return strapiFlatten(data);
}

const PostFeed = async ({businessId}) => {
    const posts = await getData(businessId);

    return (
        <FeedProvider>
            <div className="px-16 py-8 text-center">
            { posts?.map((post) => (
                <div className="my-8 inline-block text-left">
                    <PostExcerpt post={post} key={post.id} />
                </div>
            )) }
            </div>
        </FeedProvider>
    )
}

export default PostFeed;