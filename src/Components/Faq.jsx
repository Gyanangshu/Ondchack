import React from 'react';
import Accordion from '../UI/Accordion';
import AvatarGroup from "../Images/avatarGroup.svg";
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const Faq = () => {

    const FaqInfo = [
        {
            question: "Can I customize the location-based recommendations?",
            answer: "Absolutely! Our AI analyzes user data based on their location and generates tailored strategies. You can further customize these recommendations to align with your specific business goals and marketing campaigns."
        },
        {
            question: "What types of data can the LLM interpret?",
            answer: "Our LLM can interpret a wide range of data, including graphs, charts, and event logs. It presents the information in a conversational manner, making complex data easy to understand and act upon."
        },
        {
            question: "How can I access my analytics on WhatsApp?",
            answer: "Simply ask our WhatsApp LLM for your seller dashboard insights. You'll receive real-time updates and analytics directly on your WhatsApp, ensuring you stay informed no matter where you are."
        },
        {
            question: "How do I get started?",
            answer: "Getting started with Axai is a simple three-step process: a) Sign up on Axai b) Select the products you want and generate a link. c) Embed that link into your videos and start earning."
        },
        {
            question: "What is the commission that I can earn?",
            answer: "The commission varies by category but typically ranges between 2-15%."
        },
        {
            question: "Can I list my own brands?",
            answer: "Certainly! Just reach out to us, and we will assist you with the listing process."
        },
    ]

    return (
        <section className='py-24'>
            <div className=' flex justify-center flex-col'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-Heading text-4xl font-semibold text-center'>Frequently asked questions</h1>
                    {/* <p className='text-SubGray text-xl text-center'>Everything you need to know about the product and billing.</p> */}
                </div>

                <div className='pt-16'>
                    {FaqInfo.map((item, index) => (
                        <div key={index} className='mx-auto max-w-[768px]'>
                            <Accordion title={item.question} info={item.answer} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-[#F9FAFB] rounded-2xl py-8 flex flex-col justify-center items-center gap-8 mt-16'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <img className='w-[120px]' src={AvatarGroup} alt="avatar" />
                    <p className='text-Heading text-xl font-medium text-center'>Still have questions?</p>
                    <p className='text-SubGray text-lg text-center'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                </div>
                
                <Link to={'/contact'}>
                <Button style={"rounded-lg text-white py-[10px] px-[18px] font-semibold text-lg"} text={"Get in touch"} />
                </Link>
            </div>

        </section>
    )
}

export default Faq
