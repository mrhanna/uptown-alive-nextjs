import React, { useState, useRef, useId } from 'react';
import ReactPlayer from 'react-player/file';

import { useFeed } from './FeedVideoPlayer/FeedContext';
import FeedVideoPlayerControls from './FeedVideoPlayer/FeedVideoPlayerControls';

const FeedVideoPlayer = ({src, caption, rounded}) => {
    const ref = useRef(null);
    const id = useId();

    const {
        playingId,
        paused,
        muted,
        togglePlay,
        toggleMuted,
    } = useFeed();

    const [state, setState] = useState({
        progress: {
            played: 0,
            playedSeconds: 0,
        }
    })

    return (
        <div className={`group relative w-full h-full ${rounded && 'rounded-2xl overflow-hidden'}`} onClick={() => togglePlay(id)}>
            <ReactPlayer
                url={src}
                playing={playingId === id && !paused}
                loop={true}
                controls={false}
                volume={1}
                muted={muted}
                width="100%"
                height="100%"
                progressInterval={100}
                onProgress={(progress) => { setState({...state, progress})}}
                ref={ref}
                config={{
                    file: {
                          attributes: {disablePictureInPicture: true}
                    }
                }}
            />

            <div className={`
                absolute left-0 bottom-0 w-full
                flex flex-col
                ${!!caption ? 'bg-gradient-to-t from-black' : 'bg-black'}
                `}>
                {!!caption &&
                    <div className="text-white p-4 pt-8 transition-all">
                        {caption}
                    </div>
                }

                <FeedVideoPlayerControls
                    playing={playingId === id && !paused}
                    muted={muted}
                    onPlayToggle={() => (togglePlay(id))}
                    onMuteToggle={toggleMuted}
                    progress={state.progress}
                />
            </div>
        </div>
    )
}

export default FeedVideoPlayer;