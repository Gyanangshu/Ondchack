import React, { useRef, useEffect, useState } from 'react'
import Button from '../UI/Button';
import validator from "validator";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

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

    console.log(userData)

    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({ ...userData, [name]: value });
    }

    const isValidEmail = validator.isEmail(userData.email);
    const isValidFirstName = validator.isAlpha(userData.firstName, 'en-US', { ignore: ' ' });
    const isValidLastName = validator.isAlpha(userData.lastName, 'en-US', { ignore: ' ' });
    const isValidPhone = validator.isMobilePhone(userData.phone, 'any', { strictMode: false }, { min: 10 });
    const isValidMessage = validator.isLength(userData.message, { min: 10 });

    const validateField = (field, isValid) => {
        setValidationErrors((prevErrors) => ({ ...prevErrors, [field]: !isValid }));
    };

    // connect with firebase
    const submitData = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phone, message } = userData;

        validateField('firstName', isValidFirstName);
        validateField('lastName', isValidLastName);
        validateField('email', isValidEmail);
        validateField('phone', isValidPhone);
        validateField('message', isValidMessage);

        if (isValidFirstName && isValidLastName && isValidEmail && isValidPhone && isValidMessage) {

            emailjs.sendForm('service_41tat3h', 'template_4ww29z8', form.current, '9glKvYmuYXUcORsnv')
                .then((result) => {
                    toast.success("Successfully submitted form", {
                        autoClose: 3000,
                        theme: "light"
                    })
                }, (error) => {
                    toast.error("Please fill all the fields properly", {
                        autoClose: 3000,
                        theme: "light"
                    })
                });

            setUserData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                message: "",
            })

            setValidationErrors({
                firstName: false,
                lastName: false,
                phone: false,
                email: false,
                message: false,
            });

        } else {
            toast.error("Please fill your data properly", {
                autoClose: 3000,
                theme: "light"
            })
        }
    }

    // connect with EmailJs 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    };


    return (
        <section className='px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto py-16 md:flex md:flex-col md:justify-center md:items-center'>

            {/* heading and Sub */}
            <div className='flex items-center justify-center flex-col'>
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5, delay: 0.10, ease: 'easeInOut' }}
                    className='font-semibold text-lg text-blue-700'>
                    Contact Us
                </motion.h1>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5, delay: 0.10, ease: 'easeInOut' }}
                    className='md:text-headingLarge text-headingSmall py-8 text-Heading'>
                    Get in touch
                </motion.p>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: -25 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5, delay: 0.10, ease: 'easeInOut' }}
                    className='text-[#667085] text-center text-subHeadMobile font-normal'>We'd love to hear from you. Please fill out this form.
                </motion.p>
            </div>

            {/* contact form */}
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-6 py-12 md:py-24 md:w-3/4 xl:w-2/4'>
                <div className='flex flex-col gap-6 md:flex md:flex-row md:gap-4'>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 0 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 0.5, delay: 0.25, ease: 'easeInOut' }}
                        className={`flex flex-col gap-2 md:w-1/2 ${validationErrors.firstName ? 'has-error' : ''}`}>
                        <label htmlFor="FirstName" className='text-sm'>
                            First Name
                        </label>
                        <input
                            name='firstName'
                            className={`outline-2 border border-gray-300 outline-[#1f78be] p-2 rounded-lg ${validationErrors.firstName ? 'border-red-500 border-[3px] shadow-lg' : ''}`}
                            type="text"
                            placeholder='First name'
                            value={userData.firstName}
                            onChange={postUserData}
                        />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 0 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 0.5, delay: 0.35, ease: 'easeInOut' }}
                        className='flex flex-col gap-2 md:w-1/2'>
                        <label htmlFor="lastName" className='text-sm'>
                            Last Name
                        </label>
                        <input
                            name='lastName'
                            className={`outline-1 border border-gray-300 outline-[#1f78be] p-2 rounded-lg ${validationErrors.lastName ? 'border-red-500 border-[3px] shadow-lg' : ''}`}
                            type="text"
                            placeholder='Last name'
                            value={userData.lastName}
                            onChange={postUserData} />
                    </motion.div>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5, delay: 0.45, ease: 'easeInOut' }}
                    className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-sm'>
                        Email
                    </label>
                    <input
                        name='email'
                        className={`outline-1 border border-gray-300 outline-[#1f78be] p-2 rounded-lg ${validationErrors.email ? 'border-red-500 border-[3px] shadow-lg' : ''}`}
                        type="email"
                        placeholder='you@company.com'
                        value={userData.email}
                        onChange={postUserData} />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5, delay: 0.55, ease: 'easeInOut' }}
                    className='flex flex-col gap-2'>
                    <label htmlFor="phone" className='text-sm'>
                        Phone Number
                    </label>
                    <input
                        className={`outline-1 border border-gray-300 outline-[#1f78be] p-2 rounded-lg ${validationErrors.phone ? 'border-red-500 border-[3px] shadow-lg' : ''}`}
                        type="number"
                        name='phone'
                        value={userData.phone}
                        onChange={postUserData}
                    />
                    {/* <PhoneInput country={'in'} inputProps={{name:'phone'}} value={userData.phone} onChange={postUserData}/> */}
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5, delay: 0.65, ease: 'easeInOut' }}
                    className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-sm'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        className={`p-1 outline-1 border border-gray-300 outline-[#1f78be] h-36 rounded-lg ${validationErrors.message ? 'border-[3px] shadow-lg border-red-500' : ''}`}
                        value={userData.message}
                        onChange={postUserData}
                    ></textarea>
                </motion.div>

                    <button className='text-white w-full bg-[#1f78be] rounded-lg text-base font-semibold py-3 px-4 hover:scale-[1.02] transition-all duration-300 ease-in-out flex items-center justify-center gap-3' type='submit' onClick={submitData}>Send Message</button>
                
                <ToastContainer />
            </form>
        </section>
    )
}

export default ContactUs
