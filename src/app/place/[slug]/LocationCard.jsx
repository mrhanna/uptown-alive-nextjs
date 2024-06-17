import React from 'react';
import Card from '@/components/Card';
import LazyMap from '@/components/LazyMap';
import { HoursListing } from './Hours';

import {
    MapPinIcon,
} from '@heroicons/react/24/solid';


const LocationCard = ({location, hours}) => {
    //console.log(business);
    const markers = [{
        lat: location.lat,
        lon: location.lon,
    }];

    return (
        <Card title="Location">
            <LazyMap markers={markers} className="w-full h-40 my-4" />
            <div className="flex my-4 align-middle text-base/6">
                <MapPinIcon className="w-6 h-6 mr-2" />
                <p>{location.address}</p>
            </div>
            <HoursListing hours={hours} />
        </Card>
    )
}

export default LocationCard;