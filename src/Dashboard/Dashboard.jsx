import React, { useState } from 'react';
import PincodeMenu from "./PincodeMenu";
import CategoryMenu from "./Category";
import Seller from '../Seller';

const Dashboard = () => {

    const [activeMenu, setActiveMenu] = useState('Pincode');

    const handleSidebar = (item) => {
        setActiveMenu(item)
    }

    const MenuOptions = [
        {
            OptionName: 'Pincode',
            optionIcon: '',
            component: PincodeMenu,
        },

        {
            OptionName: 'Category',
            optionIcon: '',
            component: CategoryMenu,
        },
    ];

    const SelectedMenuComponent = MenuOptions.find(option => option.OptionName === activeMenu)?.component;

    return (
        <section className='flex relative h-screen'>
            <div className='w-[25rem] bg-[#1E232F] py-8 px-6 h-full'>
                <ul className='list-none text-white cursor-pointer flex flex-col gap-4'>
                    {MenuOptions.map((item, index) => (
                        <li onClick={() => handleSidebar(item.OptionName)} key={index} className={`hover:transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2 ${activeMenu === item.OptionName ? 'bg-[#344054] py-3 px-4' : 'py-3 px-4'}`}>
                            <p className='text-white text-lg'>{item.OptionName}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* right side */}
            <div className='w-full p-8 mx-auto overflow-y-scroll '>
                {SelectedMenuComponent ? <SelectedMenuComponent /> : 
                    null
                }
            </div>
        </section>
    )
}

export default Dashboard