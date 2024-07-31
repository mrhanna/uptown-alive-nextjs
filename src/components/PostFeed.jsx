import React from 'react';

import Post from './Post';
import FeedProvider from './posts/FeedVideoPlayer/FeedProvider';

async function getData(businessId) {
    const res = await fetch(`http://localhost:1337/api/posts?populate=*${businessId ? `&filters[businesses][id][$eq]=${businessId}` : ''}`);
    
    const data = await res.json();
    return data.data;
}

const PostFeed = async ({businessId}) => {
    const posts = await getData(businessId);

    return (
        <FeedProvider>
            { posts?.map((post) => (
                <div>
                    <Post post={post.attributes} key={post.id} />
                </div>
            )) }
        </FeedProvider>
    )
}

export default PostFeed;