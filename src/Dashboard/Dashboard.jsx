import React, { useState, useEffect } from 'react';
import PincodeMenu from "./PincodeMenu";
import CategoryMenu from "./Category";
import LogoutIcon from "../Images/logout-icon.svg";
import NavLogo from "../Images/navLogo.png";
import UsersMenu from "../Images/users-menu.svg";
// import Seller from '../Seller';
import Profile from './Profile';
import { UserAuth } from '../Context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig';
import Home from './Home';
import settingsIcon from "../Images/settings.svg";
import Influencer from './Influencer';

const Dashboard = () => {

    const [activeMenu, setActiveMenu] = useState('Home');
    const [collapseMenu, setCollapseMenu] = useState(true);
    const [data, setData] = useState([]);

    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (err) {
            // console.log(err)
        }
    };

    useEffect(() => {
        const isUserLoggedOut = localStorage.getItem('userLoggedOut');
        if (isUserLoggedOut) {
            localStorage.removeItem('userLoggedOut');
            window.location.reload();
        }
    }, [handleSignOut]);

    const handleSidebar = (item) => {
        setActiveMenu(item)
    }

    const MenuOptions = [
        {
            OptionName: 'Home',
            optionIcon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#4B4B4B" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            ,
            component: Home
        }, 

        {
            OptionName: 'Trend Analysis',
            optionIcon: <svg className='w-5 h-5' viewBox="0 0 181 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M172.594 172.594H8V8" stroke="#4B4B4B" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 136.589L90.297 59.4356L121.158 90.2969L167.45 44.0049" stroke="#4B4B4B" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ,
            component: CategoryMenu,
        },

        {
            OptionName: 'Seller Insights',
            optionIcon:
                <svg className='w-5 h-5' viewBox="0 0 179 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M157.879 176.166L171.595 189.882" stroke="#4B4B4B" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M107.586 153.306C107.586 168.456 119.867 180.738 135.018 180.738C142.607 180.738 149.475 177.656 154.441 172.677C159.391 167.715 162.451 160.868 162.451 153.306C162.451 138.155 150.169 125.873 135.018 125.873C119.867 125.873 107.586 138.155 107.586 153.306Z" stroke="#4B4B4B" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M153.306 98.4411V41.277C153.306 39.8219 152.728 38.4264 151.699 37.3974L122.908 8.60699C121.879 7.578 120.484 7 119.029 7H12.4865C9.45638 7 7 9.45638 7 12.4865V184.396C7 187.426 9.45638 189.882 12.4865 189.882H71.0087" stroke="#4B4B4B" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M116.73 7V38.09C116.73 41.12 119.187 43.5764 122.217 43.5764H153.307" stroke="#4B4B4B" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ,
            component: PincodeMenu,
        },

        {
            OptionName: 'Influencers',
            optionIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            component: Influencer,
        },
    ];

    const MenuBottomOptions = [
        {
            optionBottomName: 'Settings',
            optionBottomIcon: settingsIcon,
            component: Profile,
        }
    ];

    const SelectedMenuComponent = MenuOptions.find(option => option.OptionName === activeMenu)?.component;

    const SelectedBottomComponents = MenuBottomOptions.find(option => option.optionBottomName === activeMenu)?.component;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const docRef = doc(db, 'profiles', user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setData(docSnap.data())
                } else {
                    // console.log("No document found")
                }

            } catch (err) {
                // console.log(err)
            }
        }

        fetchUserData();
    }, [user])

    return (
        <section className='flex relative h-screen'>
            {collapseMenu ?
                <div className='md:w-1/4 w-[96rem] pt-4 pb-1 px-4 h-full flex flex-col justify-between transition-all duration-300 ease-in-out border-r-2 border-gray-[#EBECEE]'>
                    <div className='flex flex-col items-end w-full gap-10'>
                        <div className='flex justify-between md:justify-left items-center w-full pt-3'>
                            <img className='h-12 px-4' src={NavLogo} alt="axai" />

                            <svg onClick={() => setCollapseMenu(!collapseMenu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4B4B4B" className="w-6 h-6 relative mb-4 block md:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>

                        <ul className='list-none text-white cursor-pointer flex flex-col gap-3 w-full'>
                            {MenuOptions.map((item, index) => (
                                <li onClick={() => handleSidebar(item.OptionName)} key={index} className={`hover:transition-all duration-300 ease-in-out rounded-lg flex items-center gap-3 ${activeMenu === item.OptionName ? 'bg-[#dee5f9] py-3 px-4' : 'py-3 px-4'}`}>
                                    {item.optionIcon}
                                    <p className='text-[#4B4B4B] text-lg font-semibold text-nowrap'>{item.OptionName}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <ul className='list-none text-white cursor-pointer flex flex-col gap-4'>
                            {MenuBottomOptions.map((item, index) => (
                                <li key={index} onClick={() => handleSidebar(item.optionBottomName)} className={`flex items-center gap-3 px-3 py-3 rounded-xl hover:transition-all delay-75 ease-in-out ${activeMenu === item.optionBottomName ? 'bg-[#dee5f9] py-3 px-4' : 'py-3 px-4'}`}>
                                    <img src={item.optionBottomIcon} alt="icon" />
                                    <p className='text-[#4B4B4B] text-lg font-semibold text-nowrap'>{item.optionBottomName}</p>
                                </li>
                            ))}

                        </ul>

                        {[data].map((item) => (
                            <div className='pl-1 py-4 border-t-2 border-[#475467] flex justify-between items-center flex-wrap gap-2'>
                                <div className='flex gap-3 items-center'>
                                    <div className=''>
                                        <img className='h-10 w-10 rounded-full' src={item?.ImgURL || user?.photoURL} alt="user" />
                                    </div>
                                    <div className='text-[#4B4B4B]'>
                                        <p className='text-sm font-semibold'>{item?.firstName || user?.displayName || 'User'}</p>
                                        <p className='text-sm'>{item?.email || user?.email || 'user@example.com'}</p>
                                    </div>
                                </div>
                                <div onClick={handleSignOut} className='cursor-pointer' title='Log Out'>
                                    <img src={LogoutIcon} alt="logout" />
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

                :
                <div className='w-12 pt-6 border-r border-gray-300 transition-all duration-300 ease-in-out flex flex-col items-center gap-10'>
                    <svg onClick={() => setCollapseMenu(!collapseMenu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4B4B4B" className="w-6 h-6 relative">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <div className='flex flex-col justify-between h-full'>
                        <ul className='list-none text-white cursor-pointer flex flex-col gap-4 w-fit '>
                            {MenuOptions.map((item, index) => (
                                <li onClick={() => handleSidebar(item.OptionName)} key={index} className={`hover:transition-all duration-300 ease-in-out rounded-lg flex items-center gap-3 ${activeMenu === item.OptionName ? 'bg-[#dee5f9] py-3 px-4' : 'py-3 px-4'}`}>
                                    {item.optionIcon}
                                </li>
                            ))}
                        </ul>
                        <div className='flex flex-col gap-3'>
                            <ul className='list-none text-white cursor-pointer flex flex-col gap-4'>
                                {MenuBottomOptions.map((item, index) => (
                                    <li key={index} onClick={() => handleSidebar(item.optionBottomName)} className={`flex items-center gap-3 px-3 py-3 rounded-xl hover:transition-all delay-75 ease-in-out ${activeMenu === item.optionBottomName ? 'bg-[#dee5f9] py-3 px-4' : 'py-3 px-4'}`}>
                                        <img src={item.optionBottomIcon} alt="icon" />
                                    </li>
                                ))}

                            </ul>

                            {[data].map((item) => (
                                <div className='py-4 border-t border-[#475467] w-fit mx-auto'>
                                    <img className='h-10 w-10 rounded-full ' src={item?.ImgURL || user?.photoURL} alt="user" />
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            }

            {/* right side */}
            <div className='w-full py-8 mx-auto overflow-y-auto'>
                {SelectedMenuComponent ? <SelectedMenuComponent /> : (SelectedBottomComponents ? <SelectedBottomComponents /> : null
                )}
            </div>
        </section>
    )
}

export default Dashboard