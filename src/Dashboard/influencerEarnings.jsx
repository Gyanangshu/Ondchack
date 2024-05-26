import React, { useState, useEffect } from 'react';
import earningsTotal from "../Images/earningsTotal.svg"
import earningsOrder from "../Images/earningsOrder.svg"
import totalOrder from "../Images/totalOrder.svg"
import Button from '../UI/Button';
import InfluencerChart from '../UI/InfluencerChart';

const influencerEarnings = () => {
  const [bankName, setBankName] = useState("");

  const handleBank = (e) => {
    setBankName(e.target.value)
  }

  return (
    <section className='md:px-10'>
      {/* stats boxes */}
      <div className='flex flex-col lg:flex lg:flex-row justify-between gap-6 pt-8 pb-6 w-full'>
          {/* total earnings box */}
          <div className='p-6 rounded-lg shadow-sm border border-[#EAECF0] flex-auto'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <div>
                  <img src={earningsTotal} alt="image" />
                </div>

                <p className='text-base font-medium'>Total Earnings</p>
              </div>


              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667085" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
            </div>

            <div className='pt-6'>
              <p className='text-4xl font-semibold'>₹0</p>

              <div className='flex items-center gap-2 pt-4'>
                <div className='flex items-center gap-1 py-1 px-2 bg-[#ECFDF3] rounded-2xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#12B76A" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                  </svg>

                  <p className='text-[#027A48] text-sm font-medium'>0 %</p>
                </div>

                <p className='text-sm font-medium text-[#667085]'>vs last month</p>
              </div>
            </div>
          </div>


          {/* total orders box */}
          <div className='p-6 rounded-lg shadow-sm border border-[#EAECF0] flex-auto'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <div>
                  <img src={totalOrder} alt="" />
                </div>

                <p className='text-base font-medium'>Total Orders</p>
              </div>


              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667085" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
            </div>

            <div className='pt-6'>
              <p className='text-4xl font-semibold'>0</p>

              <div className='flex items-center gap-2 pt-4'>
                <div className='flex items-center gap-1 py-1 px-2 bg-[#ECFDF3] rounded-2xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#12B76A" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                  </svg>

                  <p className='text-[#027A48] text-sm font-medium'>0 %</p>
                </div>

                <p className='text-sm font-medium text-[#667085]'>vs last month</p>
              </div>
            </div>
          </div>

          {/* average order box */}
          <div className='p-6 rounded-lg shadow-sm border border-[#EAECF0] flex-auto'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <div>
                  <img src={earningsOrder} alt="" />
                </div>

                <p className='text-base font-medium'>Average Order Value</p>

              </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667085" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
            </div>

            <div className='pt-6'>
              <p className='text-4xl font-semibold'>₹0</p>

              <div className='flex items-center gap-2 pt-4'>
                <div className='flex items-center gap-1 py-1 px-2 bg-[#ECFDF3] rounded-2xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#12B76A" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                  </svg>

                  <p className='text-[#027A48] text-sm font-medium'>0 %</p>
                </div>

                <p className='text-sm font-medium text-[#667085]'>vs last month</p>
              </div>
            </div>
          </div>

        </div>

        <div className='py-8'>
          <InfluencerChart />
        </div>

        {/* bank details */}
        <div>
          <div>
            <h1 className='font-medium text-3xl leading-10'>Your linked account</h1>
            <p className='text-[#667085]'>Change the linked account from settings</p>
          </div>

          <div className='py-6'>
            <p className='font-semibold'>Account details</p>
          </div>

          <form onSubmit={() => e.preventDefault()}>
            <div
              className='flex flex-col gap-2 md:w-1/2'>
              <label htmlFor="FirstName" className='text-sm text-[#344054] font-medium'>
                Name in account
              </label>
              <input name='name' className='outline-1 border border-gray-300 outline-[#4285F4] p-2 rounded-lg' type="text" placeholder='Name of beneficiary' />
            </div>

            <div
              className='flex flex-col gap-2 md:w-1/2 pt-6'>
              <label htmlFor="FirstName" className='text-sm text-[#344054] font-medium'>
                Account Number
              </label>
              <input name='accountNumber' className='outline-1 border border-gray-300 outline-[#4285F4] p-2 rounded-lg' type="password" placeholder='Account Number' />
            </div>

            <div
              className='flex flex-col gap-2 md:w-1/2 pt-6'>
              <label htmlFor="FirstName" className='text-sm text-[#344054] font-medium'>
                IFSC Code
              </label>
              <input name='ifsc' className='outline-1 border border-gray-300 outline-[#4285F4] p-2 rounded-lg' type="password" placeholder='IFSC' />
            </div>

            <div
              className='flex flex-col gap-2 md:w-1/2 pt-6'>
              <label htmlFor="FirstName" className='text-sm text-[#344054] font-medium'>
                Bank
              </label>

              <select value={bankName} onChange={handleBank} className='outline-1 border border-gray-300 outline-[#4285F4] p-2 rounded-lg cursor-pointer'>
                <option className='' value={"State Bank of India"}>
                  State Bank of India
                </option>
                <option className='' value={"Axis Bank"}>
                  Axis Bank
                </option>
                <option className='' value={"Standard Chartered Bank"}>
                  Standard Chartered Bank
                </option>
              </select>

              {/* <input name='bank' className='outline-1 border border-gray-300 outline-[#4285F4] p-2 rounded-lg' type="text" placeholder='Bank Name' /> */}
            </div>

            <div className='pt-6'>
              <Button style={"bg-[#4285F4] text-white text-base font-medium rounded-lg px-4 py-[10px] md:w-max"} text={"Go to Settings"} />
            </div>

          </form>
        </div>
    </section>
  )
}

export default influencerEarnings
