import React, { useState } from 'react';
import Table from '../UI/Table';
import StatBoxes from '../UI/StatBoxes';
import Charts from '../UI/Charts';
import axios from "axios"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const PincodeMenu = () => {

  const [apiPincodeData, setApiPincodeData] = useState([]);
  const [pincode, setPincode] = useState("");
  const [isValue, setIsValue] = useState("");
  const [isEvent, setIsEvent] = useState("");

  console.log(pincode)
  console.log(isValue)
  console.log(isEvent)
  console.log(apiPincodeData)

  const event_types = [
    "search",
    "select",
    "view",
    "add to cart",
    "remove from cart",
    "purchase",
    "wishlist add",
    "wishlist remove",
    "cancel order",
    "refund order",
    "reorder",
    "rate item positive",
    "rate item negative",
  ];

  const handlePincodeAPI = async () => {

    try {
      const response = await axios.post("http://ondc.axai.ai/v1/ondc/insight", {
        pincode: pincode,
        event: isEvent,
        value: isValue,
        category: '',

      }, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      })
      setApiPincodeData(response.data)

    } catch (err) {
      console.log(err)
    }
  };

  const handlePincodeSubmit = (e) => {
    e.preventDefault();
    handlePincodeAPI();
  };

  return (
    <section>
      <h1 className='seller-heading'>ONDC Seller Hub</h1>
      <p className='text-xl text-center font-medium text-gray-600'>Take a look at your market performance filtered by pincode and products.</p>

      <div className='pt-10 flex justify-between gap-8'>
        <StatBoxes heading={'Marketing Agent'} cost={'Lets you stay on top of the trends by enabling Marketing copilot'} bg={'bg-[#FFFDC4]'} label={'Buyer & Seller apps'} labelTextColor={'text-[#027A48]'} labelBg={'bg-[#ECFDF3]'} dot={'#12B76A'} />

        <StatBoxes heading={'Cost optimization Agent'} cost={'Optimizes various costs for your sales pipeline'} bg={'bg-[#C0FFE2]'} label={'Seller apps'} labelTextColor={'text-[#6941C6]'} labelBg={'bg-[#F9F5FF]'} dot={'#9E77ED'} />

        <StatBoxes heading={'Recommender Agent'} cost={'Personalizes your catalog by matching with market baselines'} bg={'bg-[#D2EDFF]'}
          label={'Buyer & Seller apps'} labelTextColor={'text-[#027A48]'} labelBg={'bg-[#ECFDF3]'} dot={'#12B76A'}
        />
      </div>

      {apiPincodeData.length == null ?
        <>
          <div className='pt-6'>
            <Charts />
          </div>

          <div className="info-container">
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true
              }}
              className='mySwiper '
              style={{ '--swiper-pagination-color': 'red' }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              spaceBetween={30}
            >
              {Object.entries(apiPincodeData).map(([category, products]) => (
                <SwiperSlide>
                  <div key={category} className="pincode-container">
                    <div className="pincode-info-container">
                      <div className="pincode-headings-container">
                        <h2 className="pincode-headings">{category}</h2>
                      </div>

                      <div className="card-container">
                        {Object.entries(products).map(([productName, actions]) => (
                          <div key={productName} className="pincode-info-container">
                            <h3 className="product-name">{productName}</h3>
                            <ul className="card-info">
                              {Object.entries(actions).map(([action, count]) => (
                                <li className="pincode-product" key={action}>
                                  <li>{action}</li>
                                  <li>{count}</li>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </>

        :
        <form className="form w-1/2 mx-auto" onSubmit={handlePincodeSubmit}>
          <div className="form-container flex flex-col">
            <div className="form-input-containers">
              <label className="input-label" htmlFor="pincode">
                Pincode
              </label>
              <input
                required
                className="input"
                type="text"
                id="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="form-input-containers">
              <label className="input-label" htmlFor="value">
                Value
              </label>
              <input
                className="input"
                type="text"
                id="value"
                value={isValue}
                onChange={(e) => setIsValue(e.target.value)}
              />
            </div>
            <div className="form-input-containers">
              <label className="input-label" htmlFor="event">
                Event
              </label>
              <select
                className="pincode-input"
                id="event"
                type="text"
                value={isEvent}
                onChange={(e) => setIsEvent(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select Event
                </option>
                {event_types.map((eve, index) => (
                  <option key={index} value={eve}>
                    {eve}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='w-full'>
            <button className="form-button2" type="submit">
              Fetch Data
            </button>
          </div>
        </form>
      }



    </section>
  )
}

export default PincodeMenu
