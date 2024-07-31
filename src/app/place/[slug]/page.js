import { notFound } from 'next/navigation';

import  { HoursListing, OpenStatus } from './Hours';
import LocationCard from './LocationCard';
import ContactCard from './ContactCard';
import Banner from './Banner';

import PostFeed from '@/components/PostFeed';

async function getData(slug) {
    const res = await fetch(`http://localhost:1337/api/slugify/slugs/business/${slug}?populate=*`);
    
    const data = await res.json();
    return data.data;
}

export default async function BusinessPage({ params }) {
    const { attributes: business, id } = await getData(params.slug);

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
            <Banner name={business.name} hours={business.hours} tags={business.tags?.data}  photos={business.photos?.data} />
            
            <div className="flex">
                <div className="grow">
                    <PostFeed businessId={id} />
                </div>
                <div className="grow-0 bg-white">
                    <div className="sticky top-0 p-4">
                       <ContactCard info={contactInfo} />
                    </div>
                </div>
            </div>
        </main>
    ) : <main />
}