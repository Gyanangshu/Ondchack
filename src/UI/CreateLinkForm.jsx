import React, { useState, useRef } from 'react'
import deleteIcon from "../Images/deleteicon.png"
// import avatar from "../../Images/Avatar.png"
import copy from 'copy-to-clipboard'
import { toast, ToastContainer } from "react-toastify";
import productImage from "../Images/linkImage.svg";

import { db } from '../Firebase/FirebaseConfig';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { UserAuth } from '../Context/AuthContext';
// import { v4 as uuid } from 'uuid';

const CreateLinkForm = ({ checkedData, handleDelete, page, setPage, FormTitles }) => {

    const [randomLink, setRandomLink] = useState("")

    const { user } = UserAuth();

    // const linksDatabase = collection(db, "AffiliateLinks");
    // const orderDatabase = collection(db, "Ordered Products");

    const createOrderDatabase = async () => {
        try {
          const orderDatabase = doc(db, "OrderedProducts", user.uid);
          const orderDatabaseCollection = collection(orderDatabase, "ProductDetails");
      
          const promises = checkedData.map(item =>
            addDoc(orderDatabaseCollection, {
              productName: item.name,
              image: item.img,
            })
          );
      
          await Promise.all(promises);
        //   console.log("All products added");
        } catch (error) {
        //   console.error("Error adding products: ", error);
        }
      };

    const createLinksDatabase = async () => {

        const result = Math.random().toString(36).substring(1, 100)
        setRandomLink(result)

        const linksDatabase = doc(db, "AffiliateLinks", user.uid);
        const linksDatabaseCollection = collection(linksDatabase, "links");
        addDoc(linksDatabaseCollection, {
            affiliateLink: result
        })
    }
    const createLinkButton = () => {
        createOrderDatabase(),
        createLinksDatabase()
    }


    const textRef = useRef();

    const copyToClipboard = () => {
        let copyText = textRef.current.value;
        let isCopy = copy(copyText);
        if (isCopy) {
            toast("Copied to Clipboard");
        }
    };

    return (
        <div className='w-[796px]'>
            <div className='flex items-center justify-between px-6 py-5 border border-b-gray-200 bg-white'>
                <h2 className='text-lg font-medium leading-[18px] text-[#101828]'>Selected Products</h2>

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
                                <p className='text-xs'>Page: 3 of 3</p>
                            </div>
                            <div className='flex gap-3'>
                                <button className='border bg-white border-[#D0D5DD] py-2 px-4 rounded-lg hover:border-blue-500 hover:text-blue-500 hover:shadow-sm'
                                    disabled={page == 0} onClick={() => {
                                        setPage((currPage) => currPage - 1)
                                    }}>
                                    Previous
                                </button>
                                <button
                                    onClick={() => {
                                        if (page === FormTitles.length - 1) {
                                            // alert("Link created");
                                            setPage((currPage) => currPage + 1)
                                        } else {
                                            setPage((currPage) => currPage + 1)
                                        }
                                    }}
                                >
                                    {page === FormTitles.length - 1 ? "" : <p onClick={createLinkButton} className='text-white bg-blue-500 border border-[#D0D5DD] py-2 px-4 rounded-lg hover:scale-[1.03] hover:transition-all hover:delay-100 hover:ease-in-out'>+ Create link</p>}
                                </button>
                            </div>
                        </td>
                    </tr>

                </table>
            </div>

            <div className='w-full rounded-lg mt-2 transition transform duration-300 ease-in-out'>

                {
                    randomLink ? <div className='bg-white border border-gray-300 rounded-lg flex justify-between items-center'>
                        <div className='py-2 px-2' >
                            {/* <p ref={textRef}>{randomLink}</p> */}
                            <input className='outline-none' type="text" value={"link://item" + randomLink} ref={textRef} />

                        </div>

                        <button className='w-max bg-[#4285F4] text-white py-2 px-4 rounded-r-md' onClick={copyToClipboard}>Copy</button>

                    </div> : ""
                }
                <div>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={500}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        toastStyle={{ border: "4px solid #FC7F43", color: "#4285F4" }}
                    />
                </div>

            </div>
        </div>
    )
}

export default CreateLinkForm;
