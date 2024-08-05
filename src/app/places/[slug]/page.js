import { notFound } from 'next/navigation';

import ContactCard from './ContactCard';
import Banner from './Banner';

import PostFeed from '@/components/PostFeed';

import { strapiFlatten } from '@/api/StrapiHelper';

async function getData(slug) {
    const res = await fetch(`http://localhost:1337/api/slugify/slugs/business/${slug}?populate=*`);
    
    const data = await res.json();
    return strapiFlatten(data);
}

export default async function BusinessPage({ params }) {
    const business = await getData(params.slug);

    if (!business) {
        return notFound();
    }

    const contactInfo = {
        ...business.links,
        location: business.location,
        hours: business.hours,
    }

    return business ? (
        <main>
            <Banner name={business.name} hours={business.hours} tags={business.tags}  photos={business.photos} />
            
            <div className="flex">
                <div className="grow min-w-0">
                    <PostFeed businessId={business.id} />
                </div>
                <div className="grow-0 shrink-0 bg-white">
                    <div className="sticky top-0 p-4">
                       <ContactCard info={contactInfo} />
                    </div>
                </div>
            </div>
        </main>
    ) : <main />
}