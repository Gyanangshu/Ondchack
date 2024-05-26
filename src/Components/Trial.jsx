import React from 'react';
import Button from '../UI/Button';

const Trial = () => {
    return (
        <section className='py-16'>
            <div className='flex flex-col items-center bg-[#F9FAFB] py-12 rounded-lg'>
                <h1 className='text-Heading text-4xl font-semibold text-center'>Start your free trial</h1>
                <p className='text-SubGray text-xl pb-10 pt-5 text-center'>Join over 4,000+ startups already growing with Untitled.</p>
                <Button style={"py-3 px-5 text-white font-semibold rounded-lg"} text={"Get Started"} />
            </div>
        </section>
    )
}

export default Trial
