import React, { useState, useEffect } from 'react';
import InfluencerChart from '../UI/InfluencerChart';
import { getDocs, doc, collection } from 'firebase/firestore';
import productImage from "../Images/linkImage.svg";
import { db } from '../Firebase/FirebaseConfig';
import { UserAuth } from '../Context/AuthContext';

const InfluencerOverview = () => {

    const { user } = UserAuth();
    const [orderData, setOrderData] = useState([]);

    // get user order data using user uid 
    const getOrderData = async () => {
        const val = doc(db, "OrderedProducts", user.uid);
        const colllectionVal = collection(val, "ProductDetails");

        const getValue = await getDocs(colllectionVal);
        setOrderData(getValue.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        // console.log(orderData)
    }

    useEffect(() => {
        getOrderData()
    }, [])

    // console.log(orderData)

    return (
        <div className='md:px-10'>
            <div className='lg:flex lg:flex-row  lg:gap-2 lg:my-8 flex flex-col gap-8'>
                {/* boxes */}
                <div className='lg:flex lg:flex-row lg:gap-6 lg:mt-0 flex flex-col gap-6 items-center mt-8'>
                    <div className='flex flex-col justify-between gap-6'>
                        {/* total earnings box */}
                        <div className='w-[294px] h-[120px] shadow-sm p-6 rounded-lg border border-gray-200'>
                            <div className='flex items-center justify-between'>
                                <p className='text-sm font-medium text-[#667085]'>Total Earnings</p>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667085" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </div>

                            <div className='flex items-center justify-between pt-2'>
                                <p className='text-4xl font-semibold'>₹0</p>

                                <div className='flex items-center gap-1 py-1 px-2 bg-[#ECFDF3] rounded-2xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#12B76A" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                    </svg>

                                    <p className='text-[#027A48] text-sm font-medium'>0 %</p>
                                </div>
                            </div>
                        </div>

                        {/* total orders box */}
                        <div className='w-[294px] h-[120px] shadow-sm border border-gray-200 p-6 rounded-lg'>
                            <div className='flex items-center justify-between'>
                                <p className='text-sm font-medium text-[#667085]'>Total Orders</p>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667085" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </div>

                            <div className='flex items-center justify-between pt-2'>
                                <p className='text-4xl font-semibold'>0</p>

                                <div className='flex items-center gap-1 py-1 px-2 bg-[#ECFDF3] rounded-2xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#12B76A" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                    </svg>

                                    <p className='text-[#027A48] text-sm font-medium'>0 %</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* active now box */}
                    <div className='w-[294px] h-[264px] shadow-sm border border-gray-200 rounded-lg'>
                        <div className='p-6'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-5'>
                                    <div className='border border-gray-200 h-12 w-12 flex items-center justify-center rounded-[10px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4285F4" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                        </svg>
                                    </div>

                                    <p className='text-base font-medium'>Active now</p>
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

                        <div className=' flex items-center justify-end border-t border-gray-200'>
                            <p className='text-[#4285F4] text-sm font-semibold py-4 px-6'>View report</p>
                        </div>

                    </div>
                </div>

                {/* chart */}
                <div className='w-full h-fit'>
                    <InfluencerChart />
                </div>

            </div>


            {/* link table */}
            <div className='mt-10 lg:mt-0 '>
                <div className='mb-8'>
                    <h1 className='text-3xl font-medium pb-1'>Your link table</h1>
                    <p className='text-base font-normal text-[#667085]'>Get to know how each video performs</p>
                </div>

                {/* products table */}
                <div className='overflow-x-auto overflow-y-auto border border-gray-300 rounded-lg py-3 px-6'>
                    <table className='w-full border-collapse border-spacing-0'>
                        <thead>
                            <tr className='text-[#667085] text-xs font-medium text-left '>
                                <th className='w-[50%]'>Links</th>
                                <th>Status</th>
                                <th>Links opened</th>
                                <th>Order Value</th>
                                <th>Views</th>
                                <th>Metric</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orderData?.map((item) => (
                                <tr>
                                    <td className='py-6 flex items-center gap-3'>
                                        <img className='h-32 w-52 rounded-xl' src={item?.image} alt="product Image" />
                                        <div className='flex flex-col'>
                                            <p className='text-lg font-medium'>{item?.productName}</p>
                                            <p className='text-gray-500'>1 min ago</p>
                                        </div>
                                    </td>

                                    <td className='text-xs font-medium '><p className='bg-[#ECFDF3] w-fit py-1 px-2 rounded-2xl text-[#027A48]'>Active</p></td>
                                    <td className='text-sm font-medium'>0</td>
                                    <td className='text-sm text-[#667085]'>₹ 160</td>
                                    <td className='text-sm text-[#667085]'>0</td>
                                    <td>
                                        0%
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <table className='border-collapse border-spacing-0 border-t border-gray-200 flex items-center justify-between w-full'>
                        <tr>
                            <td className='pt-2 flex gap-2'>
                                <button className='border border-[#D0D5DD] bg-white py-2 px-4 rounded-lg hover:border-blue-500 hover:text-blue-500 hover:shadow-sm'>
                                    Previous
                                </button>
                                <button className='border border-[#D0D5DD] bg-white py-2 px-4 rounded-lg hover:border-blue-500 hover:text-blue-500 hover:shadow-sm'>
                                    Next
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td className='text-sm text-[#344054]'>page 1 of 10</td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default InfluencerOverview
