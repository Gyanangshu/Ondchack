import React, { useState } from 'react';
import Table from '../UI/Table'
import StatBoxes from '../UI/StatBoxes'
import Charts from '../UI/Charts'
import axios from 'axios';
import "../App.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Category = () => {

  const [category, setCategory] = useState("");
  const [apiCategoryData, setApiCategoryData] = useState([])

  console.log(category)
  console.log(apiCategoryData)

  const categories = [
    "Electronics",
    "Fashion",
    "Home and Garden",
    "Health and Beauty",
    "Sports and Outdoors",
    "Books and Media",
    "Toys and Games",
    "Groceries and Gourmet Food",
    "Automotive and Industrial",
    "Office Supplies",
  ];

  const handleCategoryAPI = async () => {

    try {
      const response = await axios.post("http://ondc.axai.ai/v1/ondc/insight", {
        pincode: "",
        event: "",
        value: "",
        category: category,

      }, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      })
      setApiCategoryData(response.data)

    } catch (err) {
      console.log(err.response)
    }
  }

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    handleCategoryAPI();
  };

  return (
    <section className='h-screen'>
      <h1 className='seller-heading'>ONDC Seller Hub</h1>
      <p className='text-xl text-center font-medium text-gray-600'>A single pane of glass for all Sales and Market optimisation opportunities</p>

      <div className='pt-10 flex justify-between gap-8'>
        <StatBoxes heading={'Marketing Agent'} cost={'Lets you stay on top of the trends by enabling Marketing copilot'} bg={'bg-[#FFFDC4]'} label={'Buyer & Seller apps'} labelTextColor={'text-[#027A48]'} labelBg={'bg-[#ECFDF3]'} dot={'#12B76A'} />

        <StatBoxes heading={'Cost optimization Agent'} cost={'Optimizes various costs for your sales pipeline'} bg={'bg-[#C0FFE2]'} label={'Seller apps'} labelTextColor={'text-[#6941C6]'} labelBg={'bg-[#F9F5FF]'} dot={'#9E77ED'} />

        <StatBoxes heading={'Recommender Agent'} cost={'Personalizes your catalog by matching with market baselines'} bg={'bg-[#D2EDFF]'}
          label={'Buyer & Seller apps'} labelTextColor={'text-[#027A48]'} labelBg={'bg-[#ECFDF3]'} dot={'#12B76A'}
        />
      </div>

      {apiCategoryData.length == null ?
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
              {Object.entries(apiCategoryData).map(([pincode, categories]) => (
                <SwiperSlide>
                  <div key={pincode} className="pincode-container">

                    {Object.entries(categories).map(([category, actions]) => (
                      <div key={category} className="pincode-info-container">
                        <div className="pincode-headings-container">
                          <h3 className="pincode-headings">{pincode}</h3>
                        </div>
                        <ul className="category-card-container card-container">
                          {Object.entries(actions).map(([action, products]) => (
                            <div className="category-action-container" key={action}>
                              <p className="category-action action-name">
                                {action}
                              </p>
                              <ul className="product-list">
                                {Object.entries(products).map(
                                  ([productName, count]) => (
                                    <li
                                      key={productName}
                                      className="category-product-item product-item"
                                    >
                                      <li className="category-product-name">
                                        {productName}
                                      </li>
                                      <li>{count}</li>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ))}
                        </ul>
                      </div>
                    ))}

                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
          </div>
        </>
        :
        <form onSubmit={handleCategorySubmit}>
          <div className="category-container form-container">
            <div className="category-input-container form-input-containers">

              <select
                className="input"
                id="category"
                type="text"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Select Category
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button className="form-button" type="submit">
              Fetch Data
            </button>
          </div>
        </form>
      }

    </section>
  )
}

export default Category
