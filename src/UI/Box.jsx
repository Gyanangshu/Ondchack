import React from 'react';

const Box = (props) => {
    return (
        <div className='border-2 border-gray-200 p-6 flex-grow shadow-md rounded-lg'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                    {props.svg}
                    <p className='font-semibold'>{props.heading}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#667085" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            </div>

            <div className='pt-6 flex flex-col gap-3'>
                <p className='text-4xl font-semibold'>₹{props.text}</p>
                <p className=''>40% <span className='text-[#667085] text-sm'>vs last month</span></p>
            </div>
        </div>
    )
}

export default Box
