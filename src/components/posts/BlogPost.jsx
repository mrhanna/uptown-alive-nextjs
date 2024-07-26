import React from 'react';
import BlockRendererClient from './BlockRendererClient';

const BlogPost = ({ post }) => {
    return (
        <article className="container mt-12">
            <BlockRendererClient content={post.content} />
        </article>
    )
}

export default BlogPost;