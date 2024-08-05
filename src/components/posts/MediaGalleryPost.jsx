import React from 'react';
import BlockRendererClient from './BlockRendererClient';
// import Gallery from './Gallery';
import UASlider from '../UASlider';

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
        <article className="py-12 bg-white max-w-screen-md">
            <UASlider media={post.gallery} /> 
            
            <div className="px-20">
                <p className="text-sm mb-8">Published {published}</p>
                <BlockRendererClient content={post.content} />
            </div>
        </article>
    )
}

export default MediaGalleryPost;