import React from 'react';
import CompanyLogo2 from "../Images/company2.svg";
import Avatar1 from "../Images/testimonialAvatar1.svg";

const Testimonial = () => {
    return (
        <section className='bg-[#F9FAFB] rounded-lg'>
            <div className='py-16 px-2'>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <img src={CompanyLogo2} alt="logo" />
                    <h1 className='text-Heading lg:text-5xl text-4xl font-medium text-center'>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h1>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <img className='h-16 w-16' src={Avatar1} alt="avatar" />
                        <div className='flex flex-col gap-1 items-center justify-center'>
                            <p className='text-Heading text-lg font-medium'>Candice Wu</p>
                            <p className='text-SubGray'>Product Manager, Sisyphus</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
