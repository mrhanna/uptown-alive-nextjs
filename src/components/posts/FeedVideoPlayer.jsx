import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player/file';

import FeedVideoPlayerControls from './FeedVideoPlayer/FeedVideoPlayerControls';

const FeedVideoPlayer = ({src, caption}) => {
    const ref = useRef(null);

    const [state, setState] = useState({
        playing: false,
        muted: false,
        progress: {
            played: 0,
            playedSeconds: 0,
        }
    })

    function play() {
        setState({...state, playing: true})
    }

    function pause() {
        setState({...state, playing: false})
    }

    function togglePlay() {
        state.playing ? pause() : play();
    }

    function toggleMute() {
        setState({...state, muted: !state.muted})
    }

    function stop() {
        pause();
        ref.current.seekTo(0);
    }

    return (
        <div className="group relative w-full h-full" onClick={togglePlay}>
            <ReactPlayer
                url={src}
                playing={state.playing}
                loop={true}
                controls={false}
                volume={1}
                muted={state.muted}
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
                absolute left-0 bottom-0 
                flex flex-col
                p-4 bg-gradient-to-t from-black
                `}>
                {!!caption &&
                    <div className="text-white group-hover:my-4 transition-all">
                        {caption}
                    </div>
                }

                <FeedVideoPlayerControls
                    playing={state.playing}
                    muted={state.muted}
                    onPlayToggle={togglePlay}
                    onMuteToggle={toggleMute}
                    progress={state.progress}
                />
            </div>
        </div>
    )
}

export default FeedVideoPlayer;