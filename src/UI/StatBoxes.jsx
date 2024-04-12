import React from 'react'

const StatBoxes = (props) => {
    return (
        <div className={`shadow-sm p-6 rounded-lg w-96 ${props.bg}`}>
            <div className={`py-1 px-2 ${props.labelBg} w-fit flex gap-2 items-center justify-center rounded-2xl`}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="3" fill={props.dot} />
                </svg>

                <p className={`text-sm ${props.labelTextColor}`}>{props.label}</p>
            </div>
            <div className='flex items-center justify-between pt-4'>
                <p className='text-3xl text-[#050411]'>{props.heading}</p>
            </div>

            <div className='flex flex-col justify-between items-start pt-2'>
                <p className='text-lg font-medium text-gray-500'>{props.cost}</p>
                <div>
                    <p className='text-[#667085] font-medium text-sm'>{props.versus}</p>
                </div>
            </div>


        </div>
    )
}

export default StatBoxes
