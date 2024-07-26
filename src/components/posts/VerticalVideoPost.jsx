import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const VerticalVideoPost = ({ post }) => {

    return (
        <article className="bg-dark">
            <div className="relative aspect-[9/16] h-[80vh] mx-auto">
                <video className="w-full h-full" controls>
                    <source type="video/mp4" src={`http://localhost:1337${post.featuredMedia.data.attributes.url}`} />
                    This browser dpes not support video
                </video>

                { !!post.content &&
                    <div className="absolute bottom-0 left-0 p-4 font-bold text-white">
                        <BlocksRenderer content={post.content} />
                    </div>
                }
            </div>
        </article>
    )
}

export default VerticalVideoPost;