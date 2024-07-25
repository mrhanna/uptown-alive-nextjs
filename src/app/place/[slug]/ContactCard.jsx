import React from 'react';
import Card from '@/components/Card';
import parsePhoneNumber from 'libphonenumber-js';

import LazyMap from '@/components/LazyMap';

import {
    FaGlobeAmericas,
    FaPhone,
    FaMapMarkedAlt,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaTiktok,
} from 'react-icons/fa';

import {
    FaF,
    FaXTwitter,
} from 'react-icons/fa6';


const ContactCard = ({info}) => {
    const markers = [{
        lat: info.location.lat,
        lon: info.location.lon,
    }];

    return (
        <Card>
            {!!info.location &&
                <>
                    <div className="m-[-1rem] mb-4">
                        <LazyMap markers={markers} className="w-full h-40" />
                    </div>
                    <ContactRow icon={<FaMapMarkedAlt />}>
                        {info.location.address}
                    </ContactRow>
                </>
            }
            {!!info.website &&
                <ContactRow icon={<FaGlobeAmericas />}>
                    <a href={info.website} target="_blank">Website</a>
                </ContactRow>
            }
            {!!info.phone &&
                <ContactRow icon={<FaPhone />}>
                    {parsePhoneNumber(info.phone).format('NATIONAL')}
                </ContactRow>
            }
            
            {/* Socials */}
            <div className="flex justify-center gap-3 text-3xl">
                {!!info.facebook &&
                    <a className="block text-[#1877f2]" href={`https://facebook.com/${info.facebook}`} target="_blank"><FaFacebook /></a>
                }
                {!!info.instagram &&
                    <a className="block text-[#c32aa3]" href={`https://instagram.com/${info.instagram}`} target="_blank"><FaInstagram /></a>
                }
                {!!info.twitter &&
                    <a className="block text-[#000]" href={`https://x.com/${info.twitter}`} target="_blank"><FaXTwitter /></a>
                }
                {!!info.tiktok &&
                    <a className="block text-[#010101]" href={`https://tiktok.com/@${info.tiktok}`} target="_blank"><FaTiktok /></a>
                }
            </div>

        </Card>
    );
}

const ContactRow = ({children, icon}) => (
    <div className="flex my-4 align-middle text-dark">
        <div className="inline-block mr-3 text-2xl text-red">
            {icon}
        </div>
        {children}
    </div>
);

export default ContactCard;