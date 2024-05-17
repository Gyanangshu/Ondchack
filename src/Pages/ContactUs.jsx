import React, { useState } from 'react'
import Button from '../UI/Button';

const ContactUs = () => {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
    });

    const [validationErrors, setValidationErrors] = useState({
        firstName: false,
        lastName: false,
        phone: false,
        email: false,
        message: false,
    });

    return (
        <section className='px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto py-16'>

            <div className='flex items-center justify-center flex-col'>
                <p className='font-semibold text-lg text-Blue'>Contact Us</p>
                <h1 className='md:text-headingLarge text-headingSmall py-8 text-Heading'>Get in touch</h1>
                <p className='text-SubGray text-subHeadMobile'>We'd love to hear from you. Please fill out this form.</p>
            </div>

            <form onClick={''} className='flex flex-col gap-6 py-12 md:py-24 md:w-3/4 xl:w-2/4 mx-auto'>
                <div className='flex flex-col gap-6 md:flex md:flex-row md:gap-4'>
                    <div
                        className={`flex flex-col gap-2 md:w-1/2 ${validationErrors.firstName ? 'has-error' : ''}`}>
                        <label htmlFor="FirstName" className='text-sm text-SubGray font-medium'>
                            First Name
                        </label>
                        <input
                            name='firstName'
                            className={`outline-2 border border-gray-300 outline-blue-500 p-2 rounded-lg ${validationErrors.firstName ? 'border-blue-500 border-[3px] shadow-lg' : ''}`}
                            type="text"
                            placeholder='First name'
                            value={userData.firstName}
                        />
                    </div>

                    <div
                        className='flex flex-col gap-2 md:w-1/2'>
                        <label htmlFor="lastName" className='text-sm text-SubGray font-medium'>
                            Last Name
                        </label>
                        <input
                            name='lastName'
                            className={`outline-1 border border-gray-300 outline-blue-500 p-2 rounded-lg ${validationErrors.lastName ? 'border-blue-500 border-[3px] shadow-lg' : ''}`}
                            type="text"
                            placeholder='Last name'
                            value={userData.lastName}
                        />
                    </div>
                </div>

                <div
                    className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-sm text-SubGray font-medium'>
                        Email
                    </label>
                    <input
                        name='email'
                        className={`outline-1 border border-gray-300 outline-blue-500 p-2 rounded-lg ${validationErrors.email ? 'border-blue-500 border-[3px] shadow-lg' : ''}`}
                        type="email"
                        placeholder='you@company.com'
                        value={userData.email}
                    />
                </div>

                <div
                    className='flex flex-col gap-2'>
                    <label htmlFor="phone" className='text-sm text-SubGray font-medium'>
                        Phone Number
                    </label>
                    <input
                        className={`outline-1 border border-gray-300 outline-blue-500 p-2 rounded-lg ${validationErrors.phone ? 'border-blue-500 border-[3px] shadow-lg' : ''}`}
                        type="number"
                        name='phone'
                        value={userData.phone}

                    />
                </div>

                <div
                    className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-sm text-SubGray font-medium'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        className={`p-1 outline-1 border border-gray-300 outline-blue-500 h-36 rounded-lg ${validationErrors.message ? 'border-[3px] shadow-lg border-blue-500' : ''}`}
                        value={userData.message}

                    ></textarea>
                </div>

                <Button div={"w-full"} style={'w-full text-white'} text={"Send message"}/>

            </form>
        </section>
    )
}

export default ContactUs
