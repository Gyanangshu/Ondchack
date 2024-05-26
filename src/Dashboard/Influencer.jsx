import React, { useState, useEffect } from 'react';
import { UserAuth } from '../Context/AuthContext';
import InfluencerOverview from './InfluencerOverview';
import influencerEarnings from './influencerEarnings';
import InfluencerHelp from './InfluencerHelp';
import InfluencerAddForm from './InfluencerAddForm';

const Influencer = () => {

    const { user } = UserAuth();

    const [activeMenu, setActiveMenu] = useState('Overview');

    const NavLink = [
        { name: "Overview", component: InfluencerOverview },
        { name: 'Add Affiliate Link', component: InfluencerAddForm },
        { name: "Earnings", component: influencerEarnings },
        // { name: "Help", component: InfluencerHelp }
    ]

    const handleNav = (name) => {
        setActiveMenu(name)
    }

    const SelectedMenuComponent = NavLink.find(option => option.name === activeMenu)?.component;

    return (
        <section>

            <div className='flex items-center justify-center gap-8 py-5 '>
                {NavLink.map((item) => (
                    <div onClick={() => handleNav(item.name)} key={item.name} className={`hover:transition-all duration-300 ease-in-out rounded-lg flex items-center gap-3 cursor-pointer ${activeMenu === item.name ? 'bg-[#dee5f9] text-blue-600 py-3 px-4' : 'py-3 px-4'}`}>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>

            {/* 
            <button className='md:mx-10 flex items-center gap-2 bg-blue-600 py-3 px-5 rounded-lg hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out mt-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <p className='text-base font-semibold text-white'>Add new affiliate link</p>
            </button> */}

            {SelectedMenuComponent ? <SelectedMenuComponent /> : null}
        </section>
    )
}

export default Influencer;