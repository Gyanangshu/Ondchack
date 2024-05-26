import React from 'react';
// import NavLogo from '../UI/NavLogo';
import Logo from "../Images/navLogo.png"
import linkedin from "../Images/linkedin.png"
import twitter from "../Images/twitter.png"
import youtube from "../Images/youtube.png"
import instagram from "../Images/instagram.png"
import Axai from "../Images/axaiLogo.png";

const Footer = () => {

  // const FooterContent = [
  //   {
  //     heading: "Product",
  //     content: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"]
  //   },
  //   {
  //     heading: "Company",
  //     content: ["About us", "Careers", "Press", "News", "Media kit", "Contact"]
  //   },
  //   {
  //     heading: "Resources",
  //     content: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"]
  //   },
  //   {
  //     heading: "Use cases",
  //     content: ["Startups", "Enterprise", "Government", "SaaS", "Marketplaces", "Ecommerce"]
  //   },
  //   {
  //     heading: "Social",
  //     content: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"]
  //   },
  //   {
  //     heading: "Legal",
  //     content: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"]
  //   },
  // ]

  return (
    <footer className='px-mobile bg-[#17191f] pb-4 pt-4 lg:pt-8 text-white xl:px-36'>
      <div className='2xl:max-w-[1440px] 2xl:mx-auto'>
        {/* <div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.10, ease: 'easeInOut' }}
          className='flex justify-center items-center gap-8 pt-6 text-sm'>
          <div className='cursor-pointer'>
            <p className='text-[#A4A4A4]'>About Us</p>
            <Link to='/team'>
              <p className='py-2'>TEAM</p>
            </Link>
            <a href="https://digi-gullak.notion.site/Careers-eaa2a2d123cd4fe88d5f3177c98c59f1">CAREERS</a>
          </div>

          <div className='cursor-pointer'>
            <p className='text-[#A4A4A4]'>Help</p>
            <Link to='/team'>
              <p className='py-2'>Team</p>
            </Link>
            <Link to='/contact'>
              <p>CONTACT US</p>
            </Link>
          </div>
        </div> */}

        <div
          className='lg:flex lg:justify-between'>
          {/* left side  */}
          <div className='py-10 lg:w-2/4'>
            {/* brand logo and tagline */}
            <div>
              <div className='flex items-center gap-8'>
                <img className='w-[180px] h-[65px]' src={Logo} alt="logo" />
                <p className='text-3xl text-gray-400'>by</p>
                <img className=' h-[53px]' src={Axai} alt="Axai" />
              </div>
              <p className='text-sm pt-3 text-[#A4A4A4]'>A Conversational Superapp</p>
            </div>

            {/* social media icons */}
            <div className='flex gap-5 py-10'>
              <a target='_blank' href="https://www.linkedin.com/company/axai-finplex/"><img src={linkedin} alt="linkedin" /></a>
              <a target='_blank' href="https://twitter.com/axai_official"><img src={twitter} alt="twitter" /></a>
              <a target='_blank' href="https://www.instagram.com/axai_official/"><img src={instagram} alt="instagram" /></a>
              <a target='_blank' href="https://www.youtube.com/channel/UCQNRylASr8QeW0ibT6llUPA/featured/"><img src={youtube} alt="youtube" /></a>
            </div>

            {/* react out  */}
            <div className='flex gap-2 pb-6 flex-wrap'>
              <button className='py-2 px-2 text-sm bg-[#D9D9D9] rounded-md text-[#544598]'>+91-9508766724</button>
              <button className='py-2 px-2 text-sm bg-[#D9D9D9] rounded-md text-[#544598]'>Support@axai.ai</button>
              <button className='py-2 px-2 text-sm bg-[#D9D9D9] rounded-md text-[#544598]'>yashraj@axai.ai</button>
            </div>

            {/* disclaimer  */}
            <div>
              <p className='text-[#646464] text-sm'>Disclaimer: You may have noticed some brand logos used on this website to indicate where you, as a user, may or may not have spent money. We don’t endorse these brands. Nor do these brands endorse us. The logos of the specific brands are owned by them.</p>
            </div>
          </div>

          {/* right side  */}
          <div className='text-right pt-8'>
            <div>
              <p className='text-sm text-[#646464]'>Locate Us</p>
              <p>Ground floor, CIIE.CO,</p>
              <p>Indian Institute of Management Ahemedabad-15</p>
              <p>Gujarat, India</p>
            </div>

            {/* map */}
            <div className='pt-6'>
              <iframe title='map' className='rounded-xl w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.411491709525!2d72.53187503140016!3d23.034666388574006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c7fe0c7273%3A0x6d516bba7896e6ce!2sCIIE.CO!5e0!3m2!1sen!2sin!4v1669881980618!5m2!1sen!2sin" loading='lazy'></iframe>
            </div>
          </div>
        </div>

        <div className='pt-28'>
          <div className='flex justify-center items-center gap-8 text-sm text-[#A4A4A4]'>
            <p className='pb-1 border-solid border-[#A4A4A4] border-b-2 w-fit cursor-pointer'>Terms & Condition</p>
            <p className='pb-1 border-solid border-[#A4A4A4] border-b-2 w-fit cursor-pointer'>Privacy Policy</p>
          </div>

          <div className='flex justify-center items-center pt-5 gap-10 '>
            <p className='text-[10px] sm:text-sm'>All Rights Reserved By Finplex Solutions Private Limited 2023</p>
            <p className='text-[10px] sm:text-sm'>Built In INDIA</p>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer
