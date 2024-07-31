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
        <div className="w-full relative my-12 [&_.slick-track]:leading-[0]">
            { images &&
                <Slider {...slickSettings} ref={slider}>
                    {images}
                </Slider>
            }
            
            { currentSlide > 0 &&
                <button className="absolute z-30 top-0 bottom-0 left-4" onClick={() => { slider?.current?.slickPrev() }}>
                    <FaChevronLeft className="w-[24px] h-[24px]" />
                </button>
            }

            { currentSlide < media.length - 1 &&  
                <button className="absolute z-30 top-0 bottom-0 right-4" onClick={() => { slider?.current?.slickNext() }}>
                    <FaChevronRight className="w-[24px] h-[24px]" />
                </button>
            }
        </div>
    )
}

export default Gallery;