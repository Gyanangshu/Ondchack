import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from "../Images/navLogo.png";

const Navbar = () => {

  const [navCollapse, setNavCollapse] = useState(false)

  const NavLinks = [
    {
      name: "Home",
      link: '/'
    },
    {
      name: "Support",
      link: '/contact'
    },
  ];

  return (
    <nav className='px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto'>
      <div className='flex items-center justify-between border-b-2 border-[#F2F4F7] py-5 transition-all duration-400 ease-in-out'>
        <Link to={'/'}>
          <img className='h-10' src={NavLogo} alt="axai" />
        </Link>

        {navCollapse ?
          <svg onClick={() => setNavCollapse(!navCollapse)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="w-8 h-8 md:hidden block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          :
          <svg onClick={() => setNavCollapse(!navCollapse)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"
            className="w-8 h-8 md:hidden block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        }

        <div className='hidden md:flex items-center gap-8 transition-all duration-300 ease-in-out'>
          {NavLinks.map((item, index) => (
            <div className='flex items-center' key={index}>
              <ul className='flex items-center gap-2 cursor-pointer'>
                <Link to={item.link}>
                  <li className='text-[#667085] text-lg font-semibold'>{item.name}</li>
                </Link>
                <img src={item.icon} alt="" />
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='transition-all duration-300 ease-in-out'>
        {navCollapse &&
          <div className='h-screen bg-white pt-8'>
            <div className='h-full flex flex-col gap-8'>
              {NavLinks.map((item, index) => (
                <div className='flex items-center' key={index}>
                  <ul className='flex items-center gap-2'>
                    <li className='text-Heading font-semibold text-4xl'>{item.name}</li>
                    <img src={item.icon} alt="" />
                  </ul>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar
