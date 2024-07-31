import React from "react";

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { FaQuoteLeft } from "react-icons/fa";

import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
    weight: '400',
    subsets: ['latin'],
})

const QuotePost = ({post}) => {
    return (
        <article className={`${merriweather.className} py-12 mx-auto max-w-screen-md max-md:container bg-white`}>
            <blockquote className="px-20 py-4 text-2xl leading-relaxed text-dark">
                <FaQuoteLeft className="w-8 h-8 block mb-8 text-[#ccc]" />
                <div className="my-8">
                    <BlocksRenderer content={post.content} />
                </div>
                <p className="text-right text-lg">&mdash; {post.author}</p>
            </blockquote>
        </article>
    )
}

export default QuotePost;