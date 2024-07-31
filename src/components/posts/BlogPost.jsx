import React from 'react';
import BlockRendererClient from './BlockRendererClient';
import FeaturedMedia from './FeaturedMedia';

import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
    weight: '400',
    subsets: ['latin'],
})

const BlogPost = ({ post }) => {
    const published = new Date(post.publishedAt).toLocaleString('en-US', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short', 
    });

    // TODO: figure out the image sizing thing
    return (
        <article className={`${merriweather.className} text-[#111] text-lg`}>
            {!!post.title &&
                <h1 className="text-5xl my-4">{post.title}</h1>
            }
            {!!post.subtitle &&
                <p className="text-2xl my-4">{post.subtitle}</p>
            }
            {!!post.featuredMedia &&
                <div className="relative w-full my-8">
                    <FeaturedMedia featuredMedia={post.featuredMedia} />
                </div>
            }
            {!!post.author &&
                <p className="text-base">By <span className="font-bold">{post.author}</span></p>
            }
            <p className="text-sm mb-8">Published {published}</p>
            <BlockRendererClient content={post.content} />
        </article>
    )
}

export default BlogPost;