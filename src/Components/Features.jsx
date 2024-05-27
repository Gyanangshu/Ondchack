import React from 'react';
import FeaturesIcon1 from "../Images/features1.svg";
import FeaturesIcon2 from "../Images/features2.svg";
import FeaturesIcon3 from "../Images/features3.svg";
import FeaturesIcon4 from "../Images/features4.svg";
import FeaturesIcon5 from "../Images/features5.svg";
import FeaturesIcon6 from "../Images/features6.svg";

const Features = () => {

    const FeatureCards = [
        {
            icon: FeaturesIcon1,
            tagline: "Trend Predictor",
            desc: "Utilize AI to forecast future sales trends with precision.",
        },
        {
            icon: FeaturesIcon2,
            tagline: "Location-Based Recommendations",
            desc: "Leverage AI to analyze user location data and develop personalized strategies for user engagement based on geographical insights.",
        },
        {
            icon: FeaturesIcon3,
            tagline: "Data Interpretation with LLM",
            desc: "Harness the power of AI to interpret data seamlessly, whether in graphs, charts, or event data, through a conversational interface.",
        },
        {
            icon: FeaturesIcon4,
            tagline: "User Tracking",
            desc: "Monitor user interactions and conversions effortlessly using our comprehensive influencer dashboard.",
        },
        {
            icon: FeaturesIcon5,
            tagline: "Pricing Agent",
            desc: "Consult with our LLM agent to determine optimal offers and discounts tailored for your users.",
        },
        {
            icon: FeaturesIcon6,
            tagline: "Insights on WhatsApp",
            desc: "Receive all your seller dashboard insights directly on WhatsApp. Simply query the WhatsApp LLM for real-time updates.",
        },
    ]

    return (
        <section className='py-24 mt-6'>
            <div>
                <p className='text-[#4285F4] font-semibold text-center'>Features</p>
                <h1 className='text-4xl font-semibold text-Heading text-center pt-3 pb-5'>Innovative AI Features to Transform Your Business</h1>
                <p className='text-[#667085] text-center'>Explore our cutting-edge features designed to elevate your business.</p>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-16 pt-16 justify-items-center'>
                {FeatureCards.map((item, index) => (
                    <div className='flex flex-col items-center justify-center max-w-[384px]'>
                        <img className='pb-5' src={item.icon} alt="icon" />
                        <p className='text-Heading text-xl font-semibold pb-2 text-center'>{item.tagline}</p>
                        <p className='text-SubGray text-center'>{item.desc}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Features
