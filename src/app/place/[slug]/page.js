import { notFound } from 'next/navigation';

import LazyMap from '@/components/LazyMap';

async function getData(slug) {
    const res = await fetch(`http://localhost:1337/api/slugify/slugs/business/${slug}?populate=*`);
    const data = (await res.json()).data?.attributes;
    return data;
}

export default async function BusinessPage({ params }) {
    const business = await getData(params.slug);
    console.log(business);

    if (!business) {
        return notFound();
    }

    return business ? (
        <main>
            <p>{business.name}</p>
            <p>{business.website}</p>
            <LazyMap coordinate={[business.coordinate.latitude, business.coordinate.longitude]} className="w-40 h-40" />
        </main>
    ) : <main />
}