import React from 'react';
import { 
    FaPlay,
    FaPause,
    FaVolumeUp,
    FaVolumeMute,
 } from 'react-icons/fa';

const FeedVideoPlayerControls = ({playing, progress, muted, onPlayToggle, onMuteToggle}) => {
    return (
        <div className={`
            flex items-center gap-4
            w-full z-10 text-offwhite text-2xl
            max-h-0 opacity-0 group-hover:max-h-8 group-hover:opacity-100
            transition-all
            `}>
            <button onClick={(e) => {
                e.stopPropagation(); 
                onPlayToggle();
            }}>
                {playing ? <FaPause /> : <FaPlay />}
            </button>
            <div className="text-sm">{Math.floor(progress.playedSeconds / 60)}:{String(Math.floor(progress.playedSeconds % 60)).padStart(2, '0')}</div>
            <div className="bg-dark rounded p-0 h-1 grow relative">
                <div className="bg-offwhite h-1 m-0" style={{width: `${progress.played * 100}%`}}>
                </div>
            </div>
            <button onClick={(e) => {
                e.stopPropagation(); 
                onMuteToggle();
            }}>
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
        </div>
    )
}

export default FeedVideoPlayerControls;