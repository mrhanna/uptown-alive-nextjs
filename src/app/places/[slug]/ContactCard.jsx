import React from 'react';
import Card from '@/components/Card';
import parsePhoneNumber from 'libphonenumber-js';

import LazyMap from '@/components/LazyMap';

import {
    FaGlobeAmericas,
    FaPhone,
    FaMapMarkedAlt,
    FaFacebook,
    FaInstagram,
    FaTiktok,
} from 'react-icons/fa';

import {
    FaXTwitter,
} from 'react-icons/fa6';


const ContactCard = ({info}) => {
    const markers = [{
        lat: info.location?.lat,
        lon: info.location?.lon,
    }];

    return (
        <>
            {!!info.location &&
                <LazyMap markers={markers} className="w-full h-40" />
            }

            <div className="my-4">
                {!!info.location &&
                    <ContactRow icon={<FaMapMarkedAlt />}>
                        {info.location.address}
                    </ContactRow>
                }

                {!!info.website &&
                    <a href={info.website} target="_blank">
                        <ContactRow icon={<FaGlobeAmericas />}>Website</ContactRow>
                    </a>
                }
                {!!info.phone &&
                    <ContactRow icon={<FaPhone />}>
                        {parsePhoneNumber(info.phone).format('NATIONAL')}
                    </ContactRow>
                }
                
                {/* Socials */}
                <div className="flex justify-center gap-3 text-3xl my-4">
                    {!!info.facebook &&
                        <a className="block text-[#1877f2] hover:drop-shadow" href={`https://facebook.com/${info.facebook}`} target="_blank"><FaFacebook /></a>
                    }
                    {!!info.instagram &&
                        <a className="block text-[#c32aa3] hover:drop-shadow" href={`https://instagram.com/${info.instagram}`} target="_blank"><FaInstagram /></a>
                    }
                    {!!info.twitter &&
                        <a className="block text-[#000] hover:drop-shadow" href={`https://x.com/${info.twitter}`} target="_blank"><FaXTwitter /></a>
                    }
                    {!!info.tiktok &&
                        <a className="block text-[#010101] hover:drop-shadow" href={`https://tiktok.com/@${info.tiktok}`} target="_blank"><FaTiktok /></a>
                    }
                </div>
            </div>
        </>
    );
}

const ContactRow = ({children, icon}) => (
    <div className="flex align-middle text-dark hover:bg-offwhite px-4 py-2 transition-colors">
        <div className="inline-block mr-3 text-2xl text-red">
            {icon}
        </div>
        {children}
    </div>
);

export default ContactCard;