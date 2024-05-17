import React from 'react';
// import NavLogo from '../UI/NavLogo';

const Footer = () => {

  const FooterContent = [
    {
      heading: "Product",
      content: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"]
    },
    {
      heading: "Company",
      content: ["About us", "Careers", "Press", "News", "Media kit", "Contact"]
    },
    {
      heading: "Resources",
      content: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"]
    },
    {
      heading: "Use cases",
      content: ["Startups", "Enterprise", "Government", "SaaS", "Marketplaces", "Ecommerce"]
    },
    {
      heading: "Social",
      content: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"]
    },
    {
      heading: "Legal",
      content: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"]
    },
  ]

  return (
    <footer className='px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto'>
      <div className='flex flex-wrap justify-between items-center px-8 py-16 gap-y-8 gap-x-4 lg:gap-x-0'>
        {FooterContent.map((item, index) => (
          <div key={index}>
            <h1 className='text-[#98A2B3] text-sm font-semibold pb-4'>{item.heading}</h1>
            <ul className='flex flex-col gap-3'>
              {item.content.map((item, index) => (
                <li key={index} className='text-SubGray font-semibold text-wrap'>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='px-8  pb-12'>
        <div className='border-t-2 flex flex-wrap justify-between items-center pt-8 gap-3'>
          
          <p className='text-[#98A2B3]'>© 2077 Untitled UI. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
