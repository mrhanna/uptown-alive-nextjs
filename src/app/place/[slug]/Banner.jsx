'use client';

import React, { useRef } from 'react';

import { Inter } from 'next/font/google';
const inter = Inter({
    weight: '700',
    subsets: ['latin'],
});
  

import Slider from 'react-slick';
import Image from 'next/image';
import { OpenStatus } from './Hours';

import TagButton from '@/components/TagButton';

import {
    FaChevronLeft,
    FaChevronRight,
} from 'react-icons/fa';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./slickfix.css"; //.slick-track { line-height: 0 }

const slickSettings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
};

const imageLoader = ({src}) => `http://localhost:1337${src}`;

const Banner = ({
    name,
    tags,
    hours,
    photos,
}) => {
    const slider = useRef(null);

    const images = photos?.map(({attributes}, i) => {
        console.log(attributes);
        return (
            <div className="h-[400px]" key={i}>
                <Image 
                    loader={imageLoader}
                    src={attributes.url} 
                    alt={attributes.alternativeText} 
                    height={400}
                    width={400*attributes.width/attributes.height}
                />
            </div>
        )
    });

    return (
        <div className="w-full relative mb-4 h-[400px] [&_.slick-track]:leading-[0]">
            { images &&
                <Slider {...slickSettings} ref={slider}>
                    {images}
                </Slider>
            }

            <button className="absolute z-30 top-0 bottom-0 left-4" onClick={() => { slider?.current?.slickPrev() }}>
                <FaChevronLeft className="w-[24px] h-[24px]" />
            </button>

            <button className="absolute z-30 top-0 bottom-0 right-4" onClick={() => { slider?.current?.slickNext() }}>
                <FaChevronRight className="w-[24px] h-[24px]" />
            </button>

            <div className="absolute bottom-0 bg-gradient-to-t from-black text-white w-full pb-6 pt-20">
                <div className="container">
                    <h1 className={`${inter.className} text-5xl leading-relaxed`}>{name}</h1>
                    <div className="flex gap-8 items-center">
                        <p className="text-base py-1"><OpenStatus hours={hours} /></p>
                        { !!tags &&
                            <div className="flex gap-2">
                                {tags?.map((tag) => (<TagButton key={tag.id} tag={tag} />))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;