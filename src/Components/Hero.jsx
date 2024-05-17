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
        <h1 className='font-semibold text-6xl text-Heading text-center'>Beautiful analytics to grow smarter</h1>
        <p className='text-SubGray text-xl max-w-[768px] text-center'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </div>

      <div className='flex items-center justify-center gap-3 py-12'>
        <button className='rounded-lg py-3 px-4 font-semibold text-lg flex items-center gap-1 border border-[#D0D5DD]'>
          <img src={PauseIcon} alt="pause" />
          <p>Demo</p>
        </button>

        <Link to={'/registration'}>
          <Button style={"rounded-lg text-white bg-[#7F56D9] py-4 px-7 font-semibold "} text={"Sign up"} />
        </Link>
      </div>

      <div className='pt-16'>
        <img src={HeroImage} alt="cover-image" />
      </div>
    </section>
  )
}

export default Hero
