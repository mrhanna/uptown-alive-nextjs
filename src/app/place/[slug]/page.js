import { notFound } from 'next/navigation';

import  { HoursListing, OpenStatus } from './Hours';
import LocationCard from './LocationCard';
import Banner from './Banner';

async function getData(slug) {
    const res = await fetch(`http://localhost:1337/api/slugify/slugs/business/${slug}?populate=*`);
    
    const data = await res.json();
    return data.data?.attributes;
}

export default async function BusinessPage({ params }) {
    const business = await getData(params.slug);

    if (!business) {
        return notFound();
    }

    //console.log(business);
    const markers = [{
        lat: business.location.lat,
        lon: business.location.lon,
        info: business.name,
    }];

    return business ? (
        <main>
            <Banner name={business.name} hours={business.hours} photos={business.photos?.data} />
            
            <div className="container md:grid md:grid-cols-3">
                <LocationCard location={business.location} hours={business.hours} />
            </div>
        </main>
    ) : <main />
}