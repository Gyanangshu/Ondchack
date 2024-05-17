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
            tagline: "Share team inboxes",
            desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        },
        {
            icon: FeaturesIcon2,
            tagline: "Deliver instant answers",
            desc: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        },
        {
            icon: FeaturesIcon3,
            tagline: "Manage your team with reports",
            desc: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
        },
        {
            icon: FeaturesIcon4,
            tagline: "Connect with customers",
            desc: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
        },
        {
            icon: FeaturesIcon5,
            tagline: "Connect the tools you already use",
            desc: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
        },
        {
            icon: FeaturesIcon6,
            tagline: "Our people make the difference",
            desc: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
        },
    ]

    return (
        <section className='py-24'>
            <div>
                <p className='text-[#6941C6] font-semibold text-center'>Features</p>
                <h1 className='text-4xl font-semibold text-Heading text-center pt-3 pb-5'>Analytics that feels like it’s from the future</h1>
                <p className='text-[#667085] text-center'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-16 pt-16 justify-items-center'>
                {FeatureCards.map((item, index) => (
                    <div className='flex flex-col items-center justify-center max-w-[384px]'>
                        <img className='pb-5' src={item.icon} alt="icon" />
                        <p className='text-Heading text-xl font-medium pb-2 text-center'>{item.tagline}</p>
                        <p className='text-SubGray text-center'>{item.desc}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Features
