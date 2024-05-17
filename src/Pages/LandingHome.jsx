import React from 'react';
import Hero from '../Components/Hero';
import Companies from '../Components/Companies';
import Features from '../Components/Features';
import Testimonial from '../Components/Testimonial';
import Faq from '../Components/Faq';
import Services from '../Components/Services';
import Trial from '../Components/Trial';

const LandingHome = () => {
  return (
    <div className='px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto lg:py-24 py-16'>
      <Hero />
      <Companies />
      <Features />
      <Testimonial />
      <Faq />
      <Services />
      <Trial />
    </div>
  )
}

export default LandingHome
