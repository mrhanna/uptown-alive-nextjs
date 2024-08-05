import React from 'react';
import Image from 'next/image';

import Navbar from './Navbar';

const Sidebar = () => {
    return (
        <div className="w-64 relative shrink-0">
            <div className="flex flex-col sticky h-screen bg-white top-0 bottom-0 p-8 text-center gap-8 items-stretch">
                <div className="text-center">
                    <Image
                        src="/logo.png"
                        alt="Uptown Alive logo"
                        className="inline"
                        width={140}
                        height={140}
                        priority
                    />
                </div>

                <Navbar />
            </div>
        </div>
    )
}

export default Sidebar;