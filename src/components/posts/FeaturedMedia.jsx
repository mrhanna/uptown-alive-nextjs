'use client';

import React from 'react';
import Image from 'next/image';
import FeedVideoPlayer from './FeedVideoPlayer';

const imageLoader = ({src}) => `http://localhost:1337${src}`;

const FeaturedMedia = ({featuredMedia, caption, rounded}) => {
    if (featuredMedia.data.attributes.mime.indexOf('image') === 0) {
        return (
            <Image 
                width={768}
                height={768*featuredMedia.data.attributes.height/featuredMedia.data.attributes.width}
                loader={imageLoader}
                className={rounded && 'rounded-2xl truncate'}
                src={featuredMedia.data.attributes.url} 
                alt={featuredMedia.data.attributes.alternativeText} 
            />                
        );
    }

    else if (featuredMedia.data.attributes.mime.indexOf('video') === 0) {
        return (
            <FeedVideoPlayer src={`http://localhost:1337${featuredMedia.data.attributes.url}`} caption={caption} rounded />
        );
    }
}

export default FeaturedMedia;