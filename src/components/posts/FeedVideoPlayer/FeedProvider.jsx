'use client';

import React, { useState } from 'react';
import FeedContext from './FeedContext';

const FeedProvider = ({children}) => {
    const [state, setState] = useState({
        autoplay: true,
        playingId: 0,
        paused: true,
        muted: false,
        connectedPlayers: 0,
    });

    const togglePlay = (playingId) => {
        if (!playingId || playingId === state.playingId) {
            setState({...state, paused: !state.paused})
        } else {
            setState({...state, playingId, paused: !state.autoplay})
        }
    }

    const toggleMuted = () => {
        setState({...state, muted: !state.muted})
    }

    const stopAll = () => {
        setState({...state, paused: true, playingId: 0});
    }

    const value = {
        ...state,
        togglePlay,
        toggleMuted,
        stopAll,
    }

    return (
        <FeedContext.Provider value={value}>
            {children}
        </FeedContext.Provider>
    );
}

export default FeedProvider;