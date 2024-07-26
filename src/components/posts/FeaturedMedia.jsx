'use client';

import React from 'react';

import Image from 'next/image';

const imageLoader = ({src}) => `http://localhost:1337${src}`;

const FeaturedMedia = ({featuredMedia}) => {
    if (featuredMedia.data.attributes.mime.indexOf('image') === 0) {
        return (
            <Image 
                width={768}
                height={768*featuredMedia.data.attributes.height/featuredMedia.data.attributes.width}
                loader={imageLoader}
                src={featuredMedia.data.attributes.url} 
                alt={featuredMedia.data.attributes.alternativeText} 
            />                
        );
    }

    else if (featuredMedia.data.attributes.mime.indexOf('video') === 0) {
        return (
            <video className="w-full h-full" controls>
                <source type={featuredMedia.data.attributes.mime} src={`http://localhost:1337${featuredMedia.data.attributes.url}`} />
                This browser dpes not support video
            </video>
        );
    }
}

export default FeaturedMedia;