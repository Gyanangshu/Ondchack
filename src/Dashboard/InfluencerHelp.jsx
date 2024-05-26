import React from 'react';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import Button from '../UI/Button';

const InfluencerHelp = () => {
  return (
    <section>
      <div className='flex items-center justify-center flex-col'>
        <div className='text-4xl md:text-headingMD lg:text-7xl font-light py-12'>
          We are happy to help
        </div>
      </div>

      <div className='h-max flex justify-center md:pt-12 lg:pt-16'>
                <form className='flex flex-col gap-6 py-8 md:w-3/4 xl:w-2/4 bg-[#F5F5EE] w-full'>
                    <div className='text-center'>
                        <h2 className='text-3xl md:text-4xl leading-[60px] -tracking-[2%]'>Support Form</h2>
                        <p className='text-[#667085] pt-5 md:text-xl'>Our team will reachout within 24hrs</p>
                    </div>

                    <div className='flex flex-col gap-6 md:flex md:flex-row md:gap-4 md:px-14 px-6 pt-6'>
                        <div
                            className='flex flex-col gap-2 md:w-1/2'>
                            <label htmlFor="FirstName" className='text-sm'>
                                First Name
                            </label>
                            <input name='FirstName' className='outline-1 border border-gray-300 outline-[#F26522] p-2 rounded-lg' type="text" placeholder='First name' />
                        </div>

                        <div
                            className='flex flex-col gap-2 md:w-1/2'>
                            <label htmlFor="LastName" className='text-sm'>
                                Last Name
                            </label>
                            <input name='LastName' className='outline-1 border border-gray-300 outline-[#F26522] p-2 rounded-lg' type="text" placeholder='Last name' />
                        </div>
                    </div>

                    <div
                        className='flex flex-col gap-2 md:px-14 px-6'>
                        <label htmlFor="Email" className='text-sm'>
                            Email
                        </label>
                        <input name='Email' className='outline-1 border border-gray-300 outline-[#F26522] p-2 rounded-lg' type="email" placeholder='you@company.com' />
                    </div>

                    <div
                        className='flex flex-col gap-2 md:px-14 px-6'>
                        <label htmlFor="phone" className='text-sm'>
                            Phone Number
                        </label>
                        <PhoneInput country={'in'} />
                    </div>

                    <div
                        className='flex flex-col gap-2 md:px-14 px-6'>
                        <label htmlFor="Email" className='text-sm'>
                            Nature of issue
                        </label>
                        <input name='Email' className='outline-1 border border-gray-300 outline-[#F26522] p-2 rounded-lg' type="email" placeholder='Issue' />
                    </div>

                    <div
                        className='flex flex-col gap-2 md:px-14 px-6'>
                        <label htmlFor="message" className='text-sm'>
                            Message 
                        </label>
                        <textarea name='message' className='p-1 outline-1 border border-gray-300 outline-[#F26522] h-36 rounded-lg'></textarea>
                    </div>

                    <div className='md:px-14 px-6'>
                        <Button style={"w-full bg-[#F26522] text-white text-sm font-semibold rounded-lg px-4 py-[10px] hover:bg-[#FF7F00] hover:transition-all hover:delay-100 hover:ease-in-out"} text={"Raise Issue"} />
                    </div>


                </form>
            </div>
    </section>
  )
}

export default InfluencerHelp
