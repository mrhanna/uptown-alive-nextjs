'use client';

import React, { useRef, useState } from 'react';

import Slider from 'react-slick';
import Image from 'next/image';

import {
    FaChevronLeft,
    FaChevronRight,
} from 'react-icons/fa';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./slickfix.css"; //.slick-track { line-height: 0 }

const Gallery = ({
    media,
}) => {
    const slider = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);

    const slickSettings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (i, next) => { setCurrentSlide(next) },
    };

    const images = media?.map(({attributes, id}) => {
        if (attributes.mime.indexOf('image') === 0) {
            return (
                <div className="w-full aspect-video relative text-center" key={id}>
                    <Image 
                        src={`http://localhost:1337${attributes.url}`} 
                        alt={attributes.alternativeText || ''} 
                        fill
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                </div>
            );
        }
    
        else if (attributes.mime.indexOf('video') === 0) {
            return (
                <div className="w-full aspect-video relative text-center" key={id}>
                    <FeedVideoPlayer src={`http://localhost:1337${featuredMedia.data.attributes.url}`} caption={caption} />
                </div>
            );
        }
    });

    return (
        <div className="w-full relative mb-12 [&_.slick-track]:leading-[0]">
            { images &&
                <Slider {...slickSettings} ref={slider}>
                    {images}
                </Slider>
            }
            
            { currentSlide > 0 &&
                <button className="absolute z-30 left-[-3rem] top-1/2 mt-[-12px] w-[24px] h-[24px] text-2xl text-center leading-[24px] hover:text-red" onClick={() => { slider?.current?.slickPrev() }}>
                    <FaChevronLeft />
                </button>
            }

            { currentSlide < media.length - 1 &&  
                <button className="absolute z-30 right-[-3rem] top-1/2 mt-[-12px] w-[24px] h-[24px] text-2xl text-center leading-[24px] hover:text-red" onClick={() => { slider?.current?.slickNext() }}>
                    <FaChevronRight />
                </button>
            }
        </div>
    )
}

export default Gallery;