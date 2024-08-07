'use client';

import React, { useRef, useState } from 'react';

import Slider from 'react-slick';
import Image from 'next/image';

import {
    FaChevronLeft,
    FaChevronRight,
} from 'react-icons/fa';

import FeedVideoPlayer from './posts/FeedVideoPlayer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UASlider = ({
    media,
    aspect = 'video',
    height,
    settings = {},
    overlayArrows = false,
}) => {
    const slider = useRef(null);
    const playerRefs = useRef({});

    const [currentSlide, setCurrentSlide] = useState(0);

    const slickSettings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (i, next) => { setCurrentSlide(next); playerRefs.current[i]?.stop(); },
        afterChange: (i) => { playerRefs.current[i]?.play()},
        ...settings,
    };

    const slides = media?.map((item, i) => {
        return (
            <div 
                className={`${settings.variableWidth ? 'h-full' : 'w-full aspect-' + aspect} relative text-center`} 
                key={item.id}>
                {item.mime.indexOf('image') === 0 &&
                    <Image 
                        src={`http://localhost:1337${item.url}`} 
                        alt={item.alternativeText || ''} 
                        fill={!settings.variableWidth}
                        width={settings.variableWidth && item.width * height / item.height}
                        height={settings.variableWidth && height}
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                }

                {item.mime.indexOf('video') === 0 &&
                    <FeedVideoPlayer src={`http://localhost:1337${item.url}`} ref={(el) => { playerRefs.current[i] = el}} />
                }
            </div>
        );
    });

    return (
        <div className={`group w-full relative mb-12 [&_.slick-track]:leading-[0] ${overlayArrows ? '' : 'px-20'}`} style={{height: height ? height + 'px' : 'auto'}}>
            { slides &&
                <Slider {...slickSettings} ref={slider}>
                    {slides}
                </Slider>
            }
            
            { (currentSlide > 0 || settings.infinite) &&
                <button className={`group/me absolute z-30 px-8 top-0 bottom-0 left-0`} onClick={() => { slider?.current?.slickPrev() }}>
                    <FaChevronLeft className={`
                        rounded-[50%] p-2 w-8 h-8 text-center transition-colors
                        ${overlayArrows ? 'bg-[#fff7] group-hover:bg-[#fffc] group-hover/me:bg-[#fff]' : 'hover:text-red'}
                    `}  />
                </button>
            }

            { (currentSlide < media.length - 1 || settings.infinite) &&  
                <button className={`group/me absolute z-30 px-8 top-0 bottom-0 right-0`} onClick={() => { slider?.current?.slickNext() }}>                       
                    <FaChevronRight className={`
                        rounded-[50%] p-2 w-8 h-8 text-center transition-colors
                        ${overlayArrows ? 'bg-[#fff7] group-hover:bg-[#fffc] group-hover/me:bg-[#fff]' : 'hover:text-red'}
                    `}  />
                </button>
            }
        </div>
    )
}

export default UASlider;