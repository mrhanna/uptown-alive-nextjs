import { notFound } from 'next/navigation';

import LazyMap from '@/components/LazyMap';
import Hours from './Hours';

async function getData(slug) {
    const res = await fetch(`http://localhost:1337/api/slugify/slugs/business/abuelos-mexican-restaurant?populate[location]=*&populate[hours][populate]=*`);
    
    const data = await res.json();
    return data.data?.attributes;
}

export default async function BusinessPage({ params }) {
    const business = await getData(params.slug);

    if (!business) {
        return notFound();
    }

    console.log(business);
    const markers = [{
        lat: business.location.lat,
        lon: business.location.lon,
        info: business.name,
    }];

    return business ? (
        <main>
            <p>{business.name}</p>
            <p>{business.website}</p>
            <LazyMap markers={markers} className="w-40 h-40" />
            <Hours hours={business.hours} />
        </main>
    ) : <main />
}