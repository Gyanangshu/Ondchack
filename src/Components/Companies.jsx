import React from 'react';
import CompanyLogo1 from "../Images/company1.svg"
import CompanyLogo2 from "../Images/company2.svg"
import CompanyLogo3 from "../Images/company3.svg"
import CompanyLogo4 from "../Images/company4.svg"
import CompanyLogo5 from "../Images/company5.svg"

const Companies = () => {
  return (
    <section className='flex flex-col items-center gap-8 py-24'>
      <h1 className='text-SubGray font-medium text-center'>Join 4,000+ companies already growing</h1>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-5 w-full items-center justify-center'>
        <img src={CompanyLogo1} alt="logo" />
        <img src={CompanyLogo2} alt="logo" />
        <img src={CompanyLogo3} alt="logo" />
        <img src={CompanyLogo4} alt="logo" />
        <img src={CompanyLogo5} alt="logo" />
      </div>
    </section>
  )
}

export default Companies
