'use client';

import React, { useRef } from 'react';

import Slider from 'react-slick';
import Image from 'next/image';
import { OpenStatus } from './Hours';

import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/solid';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slickfix.css";

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

const Banner = ({
    name,
    tags,
    hours,
    photos,
}) => {
    const slider = useRef(null);

    return (
        <div className="w-full relative mb-4">
            <Slider {...slickSettings} ref={slider}>
                <div className="h-[400px]">
                    <Image src="https://picsum.photos/400/400" 
                        width={400} height={400} />
                </div>
                <div className="h-[400px]">
                    <Image src="https://picsum.photos/400/400" 
                        width={400} height={400} />
                </div>
                <div className="h-[400px]">
                    <Image src="https://picsum.photos/400/400" 
                        width={400} height={400} />
                </div>
                <div className="h-[400px]">
                    <Image src="https://picsum.photos/400/400" 
                        width={400} height={400} />
                </div>
            </Slider>

            <button className="absolute  top-0 bottom-0 left-4" onClick={() => { slider?.current?.slickPrev() }}>
                <ChevronLeftIcon className="w-[24px] h-[24px]" />
            </button>

            <button className="absolute top-0 bottom-0 right-4" onClick={() => { slider?.current?.slickNext() }}>
                <ChevronRightIcon className="w-[24px] h-[24px]" />
            </button>

            <div className="absolute bottom-0 bg-gradient-to-t from-black text-white w-full py-8">
                <div className="container">
                    <h1 className="text-5xl leading-relaxed font-bold">{name}</h1>
                    <p className="text-base"><OpenStatus hours={hours} /></p>
                </div>
            </div>
        </div>
    )
}

export default Banner;