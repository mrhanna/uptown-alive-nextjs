'use client';

import React from 'react';

import { MdRestaurant } from "react-icons/md";
import { 
    FaHome,
    FaGlassCheers,
    FaRegCalendarAlt,
 } from 'react-icons/fa';


const NavLink = ({icon, text, url, active}) => {
    return (
        <li className="my-4">
            <button className={`flex items-center gap-4 text-xl ${active && 'text-red'}`}>
                <div>{icon}</div>
                <div>{text}</div>
            </button>
        </li>
    )
}

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink icon={<FaHome />} text="Home" active />
                <NavLink icon={<MdRestaurant />} text="Dining" />
                <NavLink icon={<FaGlassCheers />} text="Bars" />
                <NavLink icon={<FaRegCalendarAlt />} text="Events" />
            </ul>
        </nav>
    )
}

export default Navbar;