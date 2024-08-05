import React from 'react';

import TagButton from '@/components/TagButton';
import { OpenStatus } from './[slug]/Hours';

const BusinessCard = ({business}) => {
    return (
        <div>
            <div>
                Slider goes here
            </div>
            <h2>{business.name}</h2>
            
            {business.hours &&
                <OpenStatus hours={business.hours} />
            }
            {business.tags?.map((tag) => (<TagButton key={tag.id} tag={tag} />))}
        </div>
    )
}

export default BusinessCard;