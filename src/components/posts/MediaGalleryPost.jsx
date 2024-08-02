import React from 'react';
import BlockRendererClient from './BlockRendererClient';
import Gallery from './Gallery';

const MediaGalleryPost = ({ post }) => {
    const published = new Date(post.publishedAt).toLocaleString('en-US', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short', 
    });

    return (
        <article className="py-12 px-20 bg-white max-w-screen-md">
            <Gallery media={post.gallery.data} /> 
            
            <p className="text-sm mb-8">Published {published}</p>
            <BlockRendererClient content={post.content} />
        </article>
    )
}

export default MediaGalleryPost;