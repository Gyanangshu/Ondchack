import React from 'react';
import deleteIcon from "../Images/deleteicon.png";
import avatar from "../Images/Avatar.png";
import productImage from "../Images/linkImage.svg";

const CheckForm = ({ checkedData, handleDelete, page, setPage, FormTitles}) => {
  return (
    <div className='w-[796px]'>
            <div className='flex items-center justify-between px-6 py-5 border border-b-gray-200 bg-white'>
                <h2 className='text-lg font-medium leading-[18px] text-[#101828]'>Check Products</h2>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            </div>

            <div className='px-6 py-3 border border-b-gray-200 bg-[#F9FAFB]'>

                <table className='w-full h-max'>
                    <tr className=''>
                        <th className='flex items-center gap-3 text-left' >
                            <p className='text-xs text-[#667085] font-medium'>Product</p>
                        </th>

                        <th className='text-left'>
                            <p className='text-xs text-[#667085] font-medium'>Price</p>
                        </th>

                    </tr>

                    {checkedData.map((id, idx) => (
                        <tr key={idx}>
                            <td className='flex items-center py-4'>
                                <div className='flex items-start gap-3'>
                                    <img className='w-52 h-[117px] rounded-lg' src={id.img} alt="product image" />
                                    <div>
                                        <div className='text-lg font-medium'>{id.name}</div>
                                        {/* <div className='text-base text-[#667085]'>{id.company.name}</div> */}
                                    </div>
                                </div>
                            </td>

                            <td className='text-sm'>₹160</td>
                            <td className='text-sm cursor-pointer text-center'>
                                <button onClick={() => handleDelete(id)}>
                                    <img src={deleteIcon} alt="delete" />
                                </button>

                            </td>
                        </tr>

                    )
                    )}

                </table>

                <table className='w-full mt-4 border-t border-gray-300'>
                    <tr>
                        <td className='text-sm pt-2 flex justify-between items-center pr-2'>
                            <div>
                                <p className='text-xs'>Page: 2 of 3</p>
                            </div>
                            <div className='flex gap-3'>
                                <button className='border bg-white border-[#D0D5DD] py-2 px-4 rounded-lg hover:border-blue-500 hover:text-blue-500 hover:shadow-sm'
                                    disabled={page == 0} onClick={() => {
                                        setPage((currPage) => currPage - 1)
                                    }}>
                                    Previous
                                </button>
                                <button className='border bg-white border-[#D0D5DD] py-2 px-4 rounded-lg hover:border-blue-500 hover:text-blue-500 hover:shadow-sm'
                                    onClick={() => setPage((currPage) => currPage + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
  )
}

export default CheckForm
