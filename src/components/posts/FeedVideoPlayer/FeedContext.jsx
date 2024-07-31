'use client';

import { createContext, useContext } from 'react';

const FeedContext = createContext(null);

export default FeedContext;

export const useFeed = () => {
    return useContext(FeedContext);
}