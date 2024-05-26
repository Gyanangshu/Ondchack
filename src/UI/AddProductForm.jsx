import React from 'react'
import productImage from "../Images/linkImage.svg";

const AddProductForm = ({ handleSearch, results, input, handleCheck, checkedData, page, setPage, FormTitles, selectAll, handleSelectAll, dataCheckbox, handleCheckBoxDataChange }) => {

    return (
        <div className='w-[796px]'>
            <div className='bg-[#D9E7FF] rounded-2xl'>
                <div className='p-4'>
                    {/* search bar */}
                    <div className='pb-6'>
                        <input type="text" className='border border-gray-300 rounded-md px-[14px] py-[10px] w-full outline-none' placeholder='Search for products' value={input} onChange={(e) => handleSearch(e.target.value)} />
                    </div>

                    {/* product contents */}
                    <main className='bg-white rounded-lg '>

                        <div className='flex items-center justify-between border border-b-gray-200 px-6 py-5'>
                            <h2 className='text-lg font-medium leading-[18px] text-[#101828]tra'>All Products</h2>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                        </div>

                        <div className='px-6 py-3 border border-b-gray-200 bg-[#F9FAFB]'>

                            <table className='w-full h-max'>
                                <tr>
                                    <th className='flex items-center gap-3 text-left' >
                                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll}
                                            className='w-[19px] h-[19px] mr-[0.8rem] cursor-pointer' />
                                        <p className='text-xs text-[#667085] font-medium'>Product</p>
                                    </th>

                                    <th className='text-left'>
                                        <p className='text-xs text-[#667085] font-medium'>Price</p>
                                    </th>

                                    <th className='text-left'>
                                        <p className='text-xs text-[#667085] font-medium'>Status</p>
                                    </th>
                                </tr>

                                {results.map((res) => (
                                    <tr key={res.id}>
                                        <td className='flex items-center py-4'>
                                            <input onChange={() => handleCheck(res)}
                                                checkedData={checkedData.includes(res)}
                                                type="checkbox"
                                                className='w-[19px] h-[19px] mr-[0.8rem] cursor-pointer'
                                            />

                                            <div className='flex items-start gap-3'>
                                                <img className='w-52 h-[117px] rounded-lg' src={res.img} alt="product image" />
                                                <div>
                                                    <div className='text-lg font-medium'>{res.name}</div>
                                                    {/* <div className='text-base text-[#667085]'>{res.company.name}</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-lg'>₹160</td>
                                        <div className='p-1 bg-green-200 w-fit rounded-2xl'>
                                            <td className='text-xs text-green-800 '>&#8226; Available</td>
                                        </div>
                                    </tr>
                                ))}

                            </table>

                            <table className='w-full mt-4 border-t border-gray-300'>
                                <tr>
                                    <td className='text-sm pt-2 flex justify-between items-center pr-2'>
                                        <div>
                                            <p className='text-xs'>Page: 1 of 3</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <button className='border bg-white border-[#D0D5DD] py-2 px-4 rounded-lg disabled:hidden hover:border-blue-500 hover:text-blue-500 hover:shadow-sm'
                                                disabled={page == 0} onClick={() => {
                                                    setPage((currPage) => currPage - 1)
                                                }}>
                                                Previous
                                            </button>

                                            <button className='border border-[#D0D5DD] bg-white py-2 px-4 rounded-lg hover:border-blue-500 hover:text-blue-500 hover:shadow-sm'
                                                onClick={() => setPage((currPage) => currPage + 1)}
                                            >
                                                {page === FormTitles.length - 1 ? "" : "Next"}
                                            </button>
                                        </div>

                                    </td>
                                </tr>
                            </table>
                        </div>

                    </main>

                </div>

            </div>
        </div>
    )
}

export default AddProductForm
