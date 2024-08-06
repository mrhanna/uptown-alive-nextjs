import React from 'react';
import Link from 'next/link';

import TagButton from '@/components/TagButton';
import { OpenStatus } from './[slug]/Hours';

const BusinessCard = ({business}) => {
    return (
        <Link href={`/places/${business.slug}`}>
            <div className="bg-white w-96 hover:drop-shadow-xl transition-all">
                <div className="bg-offwhite h-48">
                    Slider goes here
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
            </div>
        </Link>
    )
}

export default BusinessCard;