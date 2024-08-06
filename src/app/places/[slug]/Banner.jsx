'use client';

import React, { useRef } from 'react';

import { Inter } from 'next/font/google';
const inter = Inter({
    weight: '700',
    subsets: ['latin'],
});
  
import { OpenStatus } from './Hours';

import TagButton from '@/components/TagButton';
import UASlider from '@/components/UASlider';

const slickSettings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
};

const imageLoader = ({src}) => `http://localhost:1337${src}`;

const Banner = ({
    name,
    tags,
    hours,
    photos,
}) => {
    return (
        <div className="w-full relative h-[400px] [&_.slick-track]:leading-[0]">
            { photos &&
                <UASlider media={photos} settings={slickSettings} height="400" overlayArrows />
            }

            <div className="absolute bottom-0 bg-gradient-to-t from-black text-white w-full pb-6 pt-20">
                <div className="px-8">
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