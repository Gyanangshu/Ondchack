import React from 'react'
import Button from '../UI/Button';
import PauseIcon from "../Images/pauseIcon.svg";
import HeroImage from "../Images/heroImage.svg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className=''>
      {/* heading */}
      <div className='flex flex-col items-center justify-center gap-6'>
        <div className='flex items-center gap-3 text-[#4285F4] font-semibold bg-[#F0F6FF] py-1 px-2 rounded-3xl'>
          <p className='py-1 px-2 bg-white rounded-2xl'>New Feature</p>
          <p className='flex items-center gap-2'>Check out the Copilot
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </p>
        </div>
        <h1 className='font-semibold text-6xl text-Heading text-center'>Harness the Power of AI-Driven Analytics</h1>
        <p className='text-SubGray text-xl max-w-[768px] text-center'>Unlock powerful, self-service product and growth analytics to boost conversion, engagement, and user retention. Experience unparalleled personalization with AI-driven insights, tailored strategies, and intelligent recommendations.</p>
      </div>

      <div className='flex items-center justify-center gap-3 py-12'>
        <button className='rounded-lg py-3 px-4 font-semibold flex items-center gap-1 border border-[#D0D5DD]'>
          <img className='h-5 ' src={PauseIcon} alt="pause" />
          <p>Demo</p>
        </button>

        <Link to={'/registration'}>
          <Button style={"rounded-lg text-white bg-[#4285F4] py-3 px-7 font-semibold"} text={"Sign up"} />
        </Link>
      </div>

      <div className='pt-16'>
        <img src={HeroImage} alt="cover-image" />
      </div>
    </section>
  )
}

export default Hero
