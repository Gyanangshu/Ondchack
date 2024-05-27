import React, { useEffect, useState } from 'react';
import Table from '../UI/Table';
import StatBoxes from '../UI/StatBoxes';
import Charts from '../UI/Charts';
import axios from "axios"
import Dropdown from '../UI/Dropdown';
import Mic from "../Images/microphone-2.svg";
import Send from "../Images/send.svg";
import Whatsapp from "../Images/whatsapp.svg";
import AreaGraph from '../UI/AreaGraph';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import DropdownTwo from '../UI/DropdownTwo';
import DropdownThree from '../UI/DropdownThree';
import InsightChart from '../UI/InsightChart';
import Box from '../UI/Box';
import { Link } from 'react-router-dom';
import PincodeChart from '../UI/PincodeChart';

const PincodeMenu = () => {

  const [apiPincodeData, setApiPincodeData] = useState([]);
  // const [pincode, setPincode] = useState("");
  // const [isValue, setIsValue] = useState("");
  // const [isEvent, setIsEvent] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedOptionsTwo, setSelectedOptionsTwo] = useState({});
  const [openDropdownTwo, setOpenDropdownTwo] = useState(null);
  const [selectedOptionsThree, setSelectedOptionsThree] = useState({});
  const [openDropdownThree, setOpenDropdownThree] = useState(null);

  // console.log("Source, Destination, Airline:", selectedOptionsThree)
  // console.log("Time and event", selectedOptionsTwo)

  const handleSelect = (dropdown, option) => {
    setSelectedOptions({ [dropdown]: option });
    setOpenDropdown(null);
  };

  const handleDelete = (dropdown) => {
    setSelectedOptions({ [dropdown]: null });
  };

  const handleSelectDropdownTwo = (dropdown, option) => {
    setSelectedOptionsTwo((prevState) => ({ ...prevState, [dropdown]: option }));
    setOpenDropdownTwo(null);
  }

  const handleSelectDropdownThree = (dropdown, option) => {
    setSelectedOptionsThree((prevState) => ({ ...prevState, [dropdown]: option }));
    setOpenDropdownThree(null);
  }

  const AgentNavigation = [
    {
      name: 'Marketing Agent',
      icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 2.5C14.337 2.5 13.7011 2.76339 13.2322 3.23223C12.7634 3.70107 12.5 4.33696 12.5 5V15C12.5 15.663 12.7634 16.2989 13.2322 16.7678C13.7011 17.2366 14.337 17.5 15 17.5C15.663 17.5 16.2989 17.2366 16.7678 16.7678C17.2366 16.2989 17.5 15.663 17.5 15C17.5 14.337 17.2366 13.7011 16.7678 13.2322C16.2989 12.7634 15.663 12.5 15 12.5H5C4.33696 12.5 3.70107 12.7634 3.23223 13.2322C2.76339 13.7011 2.5 14.337 2.5 15C2.5 15.663 2.76339 16.2989 3.23223 16.7678C3.70107 17.2366 4.33696 17.5 5 17.5C5.66304 17.5 6.29893 17.2366 6.76777 16.7678C7.23661 16.2989 7.5 15.663 7.5 15V5C7.5 4.33696 7.23661 3.70107 6.76777 3.23223C6.29893 2.76339 5.66304 2.5 5 2.5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5C2.5 5.66304 2.76339 6.29893 3.23223 6.76777C3.70107 7.23661 4.33696 7.5 5 7.5H15C15.663 7.5 16.2989 7.23661 16.7678 6.76777C17.2366 6.29893 17.5 5.66304 17.5 5C17.5 4.33696 17.2366 3.70107 16.7678 3.23223C16.2989 2.76339 15.663 2.5 15 2.5Z" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      selected: "No"
    },

    {
      name: 'Pricing Agent',
      icon: <svg width="18" height="22" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3129 3.51886C10.3139 2.4957 8.22756 1.66699 5.65693 1.66699C3.0863 1.66699 1.00186 2.49663 1 3.51886M1 3.51886C1 4.54202 3.08444 5.37074 5.65693 5.37074C8.22942 5.37074 10.3139 4.54202 10.3139 3.51886L10.3139 10.7041M1 3.51886V14.63C1.00093 15.6532 3.08537 16.4819 5.65693 16.4819C6.90406 16.4819 8.0301 16.2847 8.86556 15.9671M1.00093 7.22259C1.00093 8.24575 3.08538 9.07446 5.65787 9.07446C8.23036 9.07446 10.3148 8.24575 10.3148 7.22259M8.92144 12.2458C8.08133 12.5746 6.92921 12.7783 5.65693 12.7783C3.08537 12.7783 1.00093 11.9495 1.00093 10.9264M15.606 11.2209C17.2424 12.8477 17.2424 15.4866 15.606 17.1135C13.9696 18.7404 11.3151 18.7404 9.67866 17.1135C8.04221 15.4866 8.04221 12.8477 9.67866 11.2209C11.3151 9.59399 13.9696 9.59399 15.606 11.2209Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      selected: "Yes"
    },

    {
      name: 'Recommendation Agent',
      icon: <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.49984 18.3337C14.1022 18.3337 17.8332 14.6027 17.8332 10.0003C17.8332 5.39795 14.1022 1.66699 9.49984 1.66699C4.89746 1.66699 1.1665 5.39795 1.1665 10.0003C1.1665 14.6027 4.89746 18.3337 9.49984 18.3337Z" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.0332 6.46699L11.2665 11.767L5.9665 13.5337L7.73317 8.23366L13.0332 6.46699Z" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      selected: "No"

    }
  ]

  const handlePincodeAPI = async () => {
    try {
      const response = await axios.post("https://ondcapi.axai.ai/v1/ondc/insight", {
        source: selectedOptionsThree.Source,
        destination: selectedOptionsThree.Destination,
        carrier: selectedOptionsThree.Airline,
        event: '',
        query: ''

      }, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      })
      setApiPincodeData(response.data)

    } catch (err) {
      // console.log(err)
    }
  };

  console.log("Seller Insight Data", apiPincodeData)

  useEffect(() => {
    if (selectedOptionsThree.Source && selectedOptionsThree.Destination && selectedOptionsThree.Airline || selectedOptionsTwo.Event) {
      handlePincodeAPI()
    }
  }, [selectedOptionsThree])


  const seriesSearch = apiPincodeData?.seller_insight?.search;
  const seriesCart = apiPincodeData?.seller_insight?.add_to_cart;
  const seriesWishlist = apiPincodeData?.seller_insight?.add_to_wishlist;

  const series = [
    { name: 'Search', data: seriesSearch },
    { name: 'Add to Cart', data: seriesCart },
    { name: 'Add to Wishlist', data: seriesWishlist }
  ];



  return (
    <section>
      <h1 className='text-4xl pb-5 px-8'>Seller Insights</h1>

      <div className='px-8 flex items-center justify-between'>
        <h1 className='text-[#667085] font-medium text-lg'>Analyze and optimize market performance</h1>

        <div className='text-[#344054] font-medium flex items-center gap-3'>
          <p className='bg-[#dee5f9] text-blue-500 py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out'>Overview</p>
          <p className='hover:bg-[#dee5f9] py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out'>My Domains</p>
          <p className='hover:bg-[#dee5f9] py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out'>Help</p>
        </div>
      </div>

      <div className="my-4">
        <div className='py-4'>
          <div className="flex items-center justify-center gap-4">
            {['Travel', 'Accomodation', 'Grocery', 'Food', 'Electronics'].map((title, index) => (
              <Dropdown
                key={index}
                title={title}
                selectedOption={selectedOptions[title]}
                handleSelect={(option) => handleSelect(title, option)}
                isOpen={openDropdown === title}
                setOpenDropdown={setOpenDropdown}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            {Object.keys(selectedOptions).map((key) => (
              selectedOptions[key] && (
                <div key={key} className="inline-block py-1 px-3 rounded-2xl bg-[#F9F5FF] text-sm font-semibold text-[#6941C6] mr-2 shadow-md">
                  {selectedOptions[key]}
                  <button
                    className="ml-2 text-[#6941C6]"
                    onClick={() => handleDelete(key)}
                  >
                    x
                  </button>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      <div className='w-full my-11 py-8 px-4 bg-[#F0F1F3] flex flex-col gap-8 items-center'>
        <div className='flex flex-col items-center'>
          <p className='font-light'>Choose a conversation style</p>

          <div className='pt-4 flex items-center'>
            {AgentNavigation.map((item, index) => (
              <div key={index} className={item.selected === "No" ? 'flex items-center gap-2 border-2 border-gray-300 py-2 px-11 rounded-lg' : 'flex items-center gap-2 bg-blue-600 scale-110 text-white py-2 px-11 rounded-lg'}>
                <div>{item.icon}</div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <form className='bg-white p-2 rounded-[40px] w-full lg:w-1/2 relative'>
          <input type="text" className='w-full rounded-[40px] px-8 py-5 border-2 border-[#F0F0F0] outline-2 outline-[#bac5e3]' placeholder='Start a conversation...' />
          <div className='absolute right-8 flex items-center gap-3 bottom-1/2 top-1/2'>
            <img className='cursor-pointer' src={Mic} alt="mic" />
            <img className='cursor-pointer' src={Send} alt="send" />
            <Link target='_blank' to={'https://wa.link/8vliis'}>
              <img className='cursor-pointer' src={Whatsapp} alt="whatsapp" />
            </Link>
          </div>
        </form>
      </div>

      <div className="p-4 mx-8">
        <div className="flex gap-4 flex-grow mb-4 w-full">
          {['Source', 'Destination', "Airline"].map((title, index) => (
            <div className='flex-grow'>
              <DropdownThree
                key={index}
                title={title}
                selectedOption={selectedOptionsThree[title]}
                handleSelect={(option) => handleSelectDropdownThree(title, option)}
                isOpen={openDropdownThree === title}
                setOpenDropdown={setOpenDropdownThree}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 mx-8">
        <div className="flex justify-end gap-4 mb-4">
          {['Time', 'Event'].map((title, index) => (
            <DropdownTwo
              key={index}
              title={title}
              selectedOption={selectedOptionsTwo[title]}
              handleSelect={(option) => handleSelectDropdownTwo(title, option)}
              isOpen={openDropdownTwo === title}
              setOpenDropdown={setOpenDropdownTwo}
            />
          ))}
        </div>
      </div>

      {/* {apiPincodeData.length == 0 ?
        <div className='w-full text-center py-8'>
            <p className='text-2xl'>Please select from above domains to view graph</p>
        </div>
        :
        <div className='w-full h-fit px-8'>
          <PincodeChart series={series} />
        </div>} */}

      <div className='w-full h-fit px-8'>
        <PincodeChart series={series} />
      </div>

      <div className='flex gap-6 mx-8 pt-12'>
        <Box heading={'Search'} text={apiPincodeData?.seller_insight?.Num_of_search_last_month} svg={<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_6696_2062)">
            <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
            <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
            <path d="M26 35C31.5228 35 36 30.5228 36 25C36 19.4772 31.5228 15 26 15C20.4772 15 16 19.4772 16 25C16 30.5228 20.4772 35 26 35Z" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26 31C29.3137 31 32 28.3137 32 25C32 21.6863 29.3137 19 26 19C22.6863 19 20 21.6863 20 25C20 28.3137 22.6863 31 26 31Z" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26 27C27.1046 27 28 26.1046 28 25C28 23.8954 27.1046 23 26 23C24.8954 23 24 23.8954 24 25C24 26.1046 24.8954 27 26 27Z" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <filter id="filter0_d_6696_2062" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6696_2062" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6696_2062" result="shape" />
            </filter>
          </defs>
        </svg>} />

        <Box heading={'Add to Cart'} text={apiPincodeData?.seller_insight?.Num_of_add_to_cart_last_month} svg={<svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_6696_2107)">
            <rect x="2.6665" y="1" width="48" height="48" rx="10" fill="white" />
            <rect x="3.1665" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
            <path d="M31.1665 22.3999L22.1665 17.2099M17.9365 19.9599L26.6665 25.0099L35.3965 19.9599M26.6665 35.0799V24.9999M35.6665 28.9999V20.9999C35.6661 20.6492 35.5736 20.3047 35.398 20.0011C35.2225 19.6974 34.9702 19.4453 34.6665 19.2699L27.6665 15.2699C27.3625 15.0944 27.0176 15.002 26.6665 15.002C26.3154 15.002 25.9705 15.0944 25.6665 15.2699L18.6665 19.2699C18.3628 19.4453 18.1105 19.6974 17.935 20.0011C17.7594 20.3047 17.6669 20.6492 17.6665 20.9999V28.9999C17.6669 29.3506 17.7594 29.6951 17.935 29.9987C18.1105 30.3024 18.3628 30.5545 18.6665 30.7299L25.6665 34.7299C25.9705 34.9054 26.3154 34.9979 26.6665 34.9979C27.0176 34.9979 27.3625 34.9054 27.6665 34.7299L34.6665 30.7299C34.9702 30.5545 35.2225 30.3024 35.398 29.9987C35.5736 29.6951 35.6661 29.3506 35.6665 28.9999Z" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <filter id="filter0_d_6696_2107" x="0.666504" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6696_2107" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6696_2107" result="shape" />
            </filter>
          </defs>
        </svg>
        } />

        <Box heading={'Add to Wishlist'} text={apiPincodeData?.seller_insight?.Num_of_add_to_wishlist_last_month} svg={<svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_6696_3978)">
            <rect x="2.3335" y="1" width="48" height="48" rx="10" fill="white" />
            <rect x="2.8335" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
            <path d="M27.3335 15L17.3335 27H26.3335L25.3335 35L35.3335 23H26.3335L27.3335 15Z" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <filter id="filter0_d_6696_3978" x="0.333496" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6696_3978" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6696_3978" result="shape" />
            </filter>
          </defs>
        </svg>} />
      </div>

    </section>
  )
}

export default PincodeMenu
