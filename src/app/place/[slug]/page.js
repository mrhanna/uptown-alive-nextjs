import LazyMap from '@/components/LazyMap';

async function getData(slug) {
    const res = await fetch(`http://localhost:1337/api/slugify/slugs/business/${slug}?populate=*`);
    return res.json();
}

export default async function BusinessPage({ params }) {
    const business = (await getData(params.slug))?.data?.attributes;

    return business ? (
        <main>
            <p>{business.name}</p>
            <p>{business.website}</p>
            <LazyMap coordinate={[business.coordinate.latitude, business.coordinate.longitude]} className="w-40 h-40" />
        </main>
    ) : <main />
}