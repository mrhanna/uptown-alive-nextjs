'use client';

import React from 'react';
import Image from 'next/image';
import FeedVideoPlayer from './FeedVideoPlayer';

const imageLoader = ({src}) => `http://localhost:1337${src}`;

const FeaturedMedia = ({featuredMedia, caption, rounded}) => {
    if (featuredMedia.mime.indexOf('image') === 0) {
        return (
            <Image 
                width={768}
                height={768*featuredMedia.height/featuredMedia.width}
                loader={imageLoader}
                className={rounded && 'rounded-2xl truncate'}
                src={featuredMedia.url} 
                alt={featuredMedia.alternativeText} 
            />                
        );
    }

    else if (featuredMedia.mime.indexOf('video') === 0) {
        return (
            <FeedVideoPlayer src={`http://localhost:1337${featuredMedia.url}`} caption={caption} rounded />
        );
    }
}

export default FeaturedMedia;