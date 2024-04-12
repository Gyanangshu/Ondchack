import React from 'react'

const Table = (props) => {
    return (
        <div className='overflow-x-auto overflow-y-auto rounded-lg shadow-md 2xl:w-full lg:max-w-[1200px] w-full'>
            <table className='border-collapse border-spacing-0 w-full border border-gray-200'>
                <thead>
                    <tr className='text-xs font-medium text-[#667085] border-b border-gray-200 bg-gray-100'>
                        {props.tableHead.map((value, index) => (
                            <th className='text-nowrap text-left p-3' key={index}>{value}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    <tr className='border-b border-gray-200 text-nowrap p-3'>
                        <td className='text-sm font-semibold p-3'>
                            <p>Name</p>
                        </td>
                        <td className='text-sm text-[#667085] p-3'>
                            <p>Condition</p>
                        </td>
                        <td className='p-3 text-sm text-[#667085]'>
                            <p>PhoneNo</p>
                        </td>
                        <td className='p-3 text-sm text-[#667085]'>
                            <p>Follow up date</p>
                        </td>
                        <td className='p-3 text-sm text-[#667085]'>
                            <p>Time</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
