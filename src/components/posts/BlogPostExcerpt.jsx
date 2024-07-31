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

    return (
        <article className={`${merriweather.className} text-[#111] px-20 py-12 bg-white max-h-[600px] relative`}>
            {!!post.title &&
                <h1 className="text-5xl my-4">{post.title}</h1>
            }
            {!!post.subtitle &&
                <p className="text-2xl my-4">{post.subtitle}</p>
            }

            <div className="mt-12">
                {!!post.featuredMedia &&
                    <div className="relative w-2/5 mr-4 float-left">
                        <FeaturedMedia featuredMedia={post.featuredMedia} />
                    </div>
                }
                {!!post.author &&
                    <p className="text-base">By <span className="font-bold">{post.author}</span></p>
                }
                <p className="text-sm mb-4">Published {published}</p>
                <BlockRendererClient content={post.content.slice(0, 3)} />
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white from-50% text-center pt-32 pb-8">
                <button className="py-4 px-8 bg-red-darkest text-white">Read More</button>
            </div>
        </article>
    )
}

export default BlogPost;