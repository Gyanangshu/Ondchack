import React from 'react';
import Accordion from '../UI/Accordion';
import AvatarGroup from "../Images/avatarGroup.svg";
import Button from '../UI/Button';

const Faq = () => {

    const FaqInfo = [
        {
            question: "Is there a free trial available?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            question: "Can I change my plan later?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            question: "What is your cancellation policy?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            question: "Can other info be added to an invoice?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            question: "How does billing work?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            question: "How do I change my account email?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
    ]

    return (
        <section className='py-24'>
            <div className=' flex justify-center flex-col'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-Heading text-4xl font-semibold text-center'>Frequently asked questions</h1>
                    <p className='text-SubGray text-xl text-center'>Everything you need to know about the product and billing.</p>
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
                <Button style={"rounded-lg text-white bg-[#7F56D9] py-[10px] px-[18px] font-semibold text-lg"} text={"Get in touch"} />
            </div>

        </section>
    )
}

export default Faq
