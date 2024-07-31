import React from 'react';

import BlogPostExcerpt from './posts/BlogPostExcerpt'
import Post from './Post';

const PostExcerpt = ({post}) => {
    switch (post.type) {
        case 'Blog':
            return <BlogPostExcerpt post={post} />
    }

    return <Post post={post} />
}

export default PostExcerpt;