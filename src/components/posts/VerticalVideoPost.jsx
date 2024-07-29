import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import FeaturedMedia from './FeaturedMedia';

const VerticalVideoPost = ({ post }) => {

    return (
        <article>
            <div className="relative aspect-[9/16] h-[80vh] mx-auto">
                <FeaturedMedia featuredMedia={post.featuredMedia} caption={!!post.content && <BlocksRenderer content={post.content} />} />

                {/* { !!post.content &&
                    <div className="absolute bottom-0 left-0 p-4 font-bold text-white">
                        <BlocksRenderer content={post.content} />
                    </div>
                } */}
            </div>
        </article>
    )
}

export default VerticalVideoPost;