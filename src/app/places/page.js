import { strapiFlatten } from '@/api/StrapiHelper';
import BusinessCard from './BusinessCard';

async function getData() {
    const res = await fetch(`http://localhost:1337/api/businesses/?populate[0]=photos&populate[1]=tags`);
    
    const data = await res.json();
    return strapiFlatten(data);
}

export default async function BusinessPage({ params }) {
    const businesses = await getData(params.slug);

    return businesses ? (
        <main>
            {businesses.map((business) => <BusinessCard business={business} />)}
        </main>
    ) : <main />
}