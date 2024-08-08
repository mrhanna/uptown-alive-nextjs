import React from 'react';
import Link from 'next/link';

import TagButton from '@/components/TagButton';
import { OpenStatus } from './[slug]/Hours';
import UASlider from '@/components/UASlider';

const BusinessCard = ({business}) => {
    return (
        <div className="relative bg-white w-96 hover:drop-shadow-xl transition-all">
            <div className="bg-offwhite aspect-video">
                {business.photos &&
                    <UASlider
                        media={business.photos}
                        overlayArrows
                        settings={{dots: false}}
                    />
                }
            </div>
            <div className="p-4">
                <h2 className="text-2xl">{business.name}</h2>
                
                {business.hours &&
                    <p>
                        <OpenStatus hours={business.hours} />
                    </p>
                }
                {business.tags?.map((tag) => (<TagButton key={tag.id} tag={tag} />))}
            </div>
            
            <Link href={`/places/${business.slug}`} className="absolute z-10 inset-0"></Link>
        </div>
    )
}

export default BusinessCard;