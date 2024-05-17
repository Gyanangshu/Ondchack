import React from 'react';
import ServicesPic from "../Images/servicesPic.svg"

const Services = () => {

    const ServiceStats = [
        {
            number: "4,000+",
            tagline: "Global customers",
            desc: "We’ve helped over 4,000 amazing global companies.",
        },
        {
            number: "600%",
            tagline: "Return on investment",
            desc: "Our customers have reported an average of ~600% ROI.",
        },
        {
            number: "10k",
            tagline: "Global downloads",
            desc: "Our app has been downloaded over 10k times.",
        },
        {
            number: "200+",
            tagline: "5-star reviews",
            desc: "We’re proud of our 5-star rating with over 200 reviews.",
        },
    ]

    return (
        <section className='py-16'>
            <div className='px-8 text-center'>
                <p className='text-Violet font-semibold'>Launch Faster</p>
                <h1 className='text-Heading font-semibold text-4xl pt-3 pb-5'>Build something great</h1>
                <p className='text-SubGray text-xl'>We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster.</p>
            </div>

            <div className='flex justify-between items-center px-8 pt-16'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-y-16 w-full'>
                    {ServiceStats.map((item, index) => (
                        <div key={index} className='flex flex-col items-center'>
                            <p className='text-Violet text-[60px] font-semibold'>{item.number}</p>
                            <p className='text-Heading font-medium text-lg'>{item.tagline}</p>
                            <p className='text-SubGray max-w-[264px] text-center'>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className='lg:block hidden'>
                    <img src={ServicesPic} alt="service-pic" />
                </div>
            </div>
        </section>
    )
}

export default Services
