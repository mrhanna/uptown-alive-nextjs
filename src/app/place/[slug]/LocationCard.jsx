import React from 'react';
import Card from '@/components/Card';
import LazyMap from '@/components/LazyMap';
import { HoursListing } from './Hours';

import {
    FaMapMarkedAlt
} from 'react-icons/fa';


const LocationCard = ({location, hours}) => {
    //console.log(business);
    const markers = [{
        lat: location.lat,
        lon: location.lon,
    }];

    return (
        <Card title="Location">
            <LazyMap markers={markers} className="w-full h-40" />
            <div className="flex my-4 align-middle text-base/6">
                <FaMapMarkedAlt className="w-6 h-6 mr-2" />
                <p>{location.address}</p>
            </div>
            <HoursListing hours={hours} />
        </Card>
    )
}

export default LocationCard;