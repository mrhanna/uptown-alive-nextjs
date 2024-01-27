//import Map from '@/components/map';

import dynamic from 'next/dynamic';

async function getData(slug) {
    const res = await fetch(`http://localhost:1337/api/slugify/slugs/business/${slug}`);
    return res.json();
}

export default async function BusinessPage({ params }) {
    const DynamicMap = dynamic(
        () => import('@/components/map'),
        {
            ssr: false,
            loading: () => (<div>loading...</div>),
        }
    );

    const business = (await getData(params.slug))?.data?.attributes;

    return business ? (
        <main>
            <p>{business.name}</p>
            <p>{business.website}</p>
            <DynamicMap />
        </main>
    ) : <main />
}