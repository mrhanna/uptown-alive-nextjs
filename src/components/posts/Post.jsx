import React from 'react';

import BlogPost from './BlogPost';
import VerticalVideoPost from './VerticalVideoPost';
import MediaGalleryPost from './MediaGalleryPost';
import QuotePost from './QuotePost';

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