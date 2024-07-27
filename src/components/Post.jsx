import React from 'react';

import BlogPost from './posts/BlogPost';
import VerticalVideoPost from './posts/VerticalVideoPost';
import MediaGalleryPost from './posts/MediaGalleryPost';
import QuotePost from './posts/QuotePost';

const Post = ({post}) => {
    switch (post.type) {
        case 'Vertical Video':
            return <VerticalVideoPost post={post} />
        case 'Blog':
            return <BlogPost post={post} />
        case 'Media Gallery':
            return <MediaGalleryPost post={post} />
        case 'Quote':
            return <QuotePost post={post} />
    }

    return <>Error</>
}

export default Post;