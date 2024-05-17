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

const Dashboard = () => {

    const [activeMenu, setActiveMenu] = useState('Home');
    const [collapseMenu, setCollapseMenu] = useState(true);
    const [data, setData] = useState([]);

    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err)
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            ,
            component: Home
        },
        {
            OptionName: 'Seller Insights',
            optionIcon:
                <svg className='w-5 h-5' viewBox="0 0 179 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M157.879 176.166L171.595 189.882" stroke="white" stroke-width="13.7162" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M107.586 153.306C107.586 168.456 119.867 180.738 135.018 180.738C142.607 180.738 149.475 177.656 154.441 172.677C159.391 167.715 162.451 160.868 162.451 153.306C162.451 138.155 150.169 125.873 135.018 125.873C119.867 125.873 107.586 138.155 107.586 153.306Z" stroke="white" stroke-width="13.7162" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M153.306 98.4411V41.277C153.306 39.8219 152.728 38.4264 151.699 37.3974L122.908 8.60699C121.879 7.578 120.484 7 119.029 7H12.4865C9.45638 7 7 9.45638 7 12.4865V184.396C7 187.426 9.45638 189.882 12.4865 189.882H71.0087" stroke="white" stroke-width="13.7162" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M116.73 7V38.09C116.73 41.12 119.187 43.5764 122.217 43.5764H153.307" stroke="white" stroke-width="13.7162" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ,
            component: PincodeMenu,
        },

        {
            OptionName: 'Trend Analysis',
            optionIcon: <svg className='w-5 h-5' viewBox="0 0 181 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M172.594 172.594H8V8" stroke="white" stroke-width="15.4307" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 136.589L90.297 59.4356L121.158 90.2969L167.45 44.0049" stroke="white" stroke-width="15.4307" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ,
            component: CategoryMenu,
        },
    ];

    const MenuBottomOptions = [
        {
            optionBottomName: 'Profile',
            optionBottomIcon: UsersMenu,
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
                <div className='md:w-96 w-[40rem] bg-[#1E232F] pt-4 pb-1 px-4 h-full flex flex-col justify-between transition-all duration-300 ease-in-out'>
                    <div className='flex flex-col items-end w-full gap-5'>
                        <div className='flex justify-between md:justify-center items-center w-full'>
                            <div className='bg-white p-2 rounded-lg md:w-full flex justify-center'>
                                <img className='h-12 ' src={NavLogo} alt="" />
                            </div>

                            <svg onClick={() => setCollapseMenu(!collapseMenu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6 relative mb-4 block md:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>

                        <ul className='list-none text-white cursor-pointer flex flex-col gap-4 w-full'>
                            {MenuOptions.map((item, index) => (
                                <li onClick={() => handleSidebar(item.OptionName)} key={index} className={`hover:transition-all duration-300 ease-in-out rounded-lg flex items-center gap-3 ${activeMenu === item.OptionName ? 'bg-[#3a5997] py-3 px-4' : 'py-3 px-4'}`}>
                                    {item.optionIcon}
                                    <p className='text-white text-lg'>{item.OptionName}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <ul className='list-none text-white cursor-pointer flex flex-col gap-4'>
                            {MenuBottomOptions.map((item, index) => (
                                <li key={index} onClick={() => handleSidebar(item.optionBottomName)} className={`flex items-center gap-3 px-3 py-3 rounded-xl hover:transition-all delay-75 ease-in-out ${activeMenu === item.optionBottomName ? 'bg-[#3a5997] py-3 px-4' : 'py-3 px-4'}`}>
                                    <img src={item.optionBottomIcon} alt="icon" />
                                    <p className='text-white text-lg'>{item.optionBottomName}</p>
                                </li>
                            ))}

                        </ul>

                        {[data].map((item) => (
                            <div className='pl-1 py-4 border-t border-[#475467] flex justify-between items-center flex-wrap'>
                                <div className='flex gap-3 items-center'>
                                    <div className=''>
                                        <img className='h-10 w-10 rounded-full' src={item?.ImgURL || user?.photoURL} alt="user" />
                                    </div>
                                    <div className='text-white'>
                                        <p className='text-sm font-semibold'>{item?.firstName || user?.displayName || 'User'}</p>
                                        <p className='text-sm text-[#F2F4F7]'>{item?.email || user?.email || 'user@example.com'}</p>
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
                <div className='w-10 pl-2 pt-4 bg-[#1E232F] transition-all duration-300 ease-in-out'>
                    <svg onClick={() => setCollapseMenu(!collapseMenu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6 mr-4 relative">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            }

            {/* right side */}
            <div className='w-full p-8 mx-auto overflow-y-auto'>
                {SelectedMenuComponent ? <SelectedMenuComponent /> : (SelectedBottomComponents ? <SelectedBottomComponents /> : null
                )}
            </div>
        </section>
    )
}

export default Dashboard