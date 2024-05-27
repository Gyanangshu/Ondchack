import React, { useEffect, useState } from 'react'
import BarGraph from '../UI/BarGraph'
import { UserAuth } from '../Context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig';
import VerticalBarGraph from '../UI/VerticalBarGraph';
import Mic from "../Images/microphone-2.svg";
import Send from "../Images/send.svg";
import Whatsapp from "../Images/whatsapp.svg";
import AreaGraph from '../UI/AreaGraph';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const { user } = UserAuth();
    const [userData, setUserData] = useState([]);
    const [homeApiData, setHomeApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isPilotLoading, setIsPilotLoading] = useState(false);
    const [userPrompt, setUserPrompt] = useState('');
    const [copilotData, setCopilotData] = useState([]);

    // const [categoryOption, setCategoryOption] = useState('');
    // const [selectedOption, setSelectedOption] = useState([500, 300, 200]);
    // const [colors, setColors] = useState('')

    // const handleDropdownChange = (event) => {
    //     setCategoryOption(event.target.value)
    //     const value = event.target.value;
    //     if (value === 'Electronics') {
    //         setSelectedOption([500, 300, 200]);
    //         setColors(['#3E86F0']);
    //     } else if (value === 'Home Appliances') {
    //         setSelectedOption([400, 250, 150]);
    //         setColors(['#d46f0b']);
    //     } else if (value === 'Fashion') {
    //         setSelectedOption([350, 200, 120]);
    //         setColors(['#A020F0']);
    //     }
    // };

    // const handleCategoryOption = (e) => {
    //     setCategoryOption(e.target.value)
    // }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const docRef = doc(db, 'profiles', user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUserData(docSnap.data())
                } else {
                    // console.log("No document found")
                }
            } catch (err) {
                // console.log(err)
            }
        }
        fetchUserData();
        handleHomeApi();
    }, [user])

    const data = [
        { label: 'Total Searches', value: 1500, color: '#1E90FF' },
        { label: 'Total Add to Carts', value: 800, color: '#32CD32' },
        { label: 'Total Purchases', value: 600, color: '#FF6347' },
    ];

    // const maxValue = Math.max(...data.map((item) => item.value));

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

    const CopilotSuggestions = [
        {
            note: 'Give a discount figure for flights from Air India between Delhi to Bengaluru',
            emoji: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM5.15467 10.4273C6.66416 11.9463 9.08775 12.0045 10.6671 10.5961L10.8453 10.4273C11.04 10.2314 11.3566 10.2304 11.5524 10.4251C11.7265 10.5981 11.7467 10.8674 11.6123 11.0627L11.5547 11.1322L11.5323 11.1545C9.5691 13.1054 6.39616 13.0953 4.44533 11.1322C4.25069 10.9363 4.25169 10.6197 4.44757 10.4251C4.64344 10.2304 4.96002 10.2314 5.15467 10.4273ZM10.5 5.5C11.0523 5.5 11.5 5.94772 11.5 6.5C11.5 7.05228 11.0523 7.5 10.5 7.5C9.94772 7.5 9.5 7.05228 9.5 6.5C9.5 5.94772 9.94772 5.5 10.5 5.5ZM5.5 5.5C6.05228 5.5 6.5 5.94772 6.5 6.5C6.5 7.05228 6.05228 7.5 5.5 7.5C4.94772 7.5 4.5 7.05228 4.5 6.5C4.5 5.94772 4.94772 5.5 5.5 5.5Z" fill="black" fill-opacity="0.8956" />
            </svg>

        },

        {
            note: 'Create Discount coupons for users who have added my products in cart',
            emoji: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.39804 9.80882C4.57428 9.93313 4.78476 9.99968 5.00043 9.9993C5.21633 9.99946 5.42686 9.93197 5.60243 9.8063C5.77993 9.67582 5.91464 9.49552 5.98943 9.2883L6.43643 7.9153C6.55086 7.57101 6.74391 7.25811 7.00028 7.00139C7.25665 6.74467 7.56929 6.5512 7.91343 6.4363L9.30443 5.9853C9.45636 5.93095 9.59364 5.84214 9.70551 5.72586C9.81738 5.60957 9.9008 5.46896 9.94924 5.31503C9.99767 5.16111 10.0098 4.99806 9.98468 4.83867C9.95955 4.67927 9.89786 4.52786 9.80443 4.3963C9.67034 4.21038 9.47939 4.07314 9.26043 4.0053L7.88543 3.5583C7.54091 3.44407 7.22777 3.25111 6.97087 2.99472C6.71396 2.73833 6.52035 2.42558 6.40543 2.0813L5.95343 0.693301C5.88113 0.490997 5.74761 0.316236 5.57143 0.193301C5.43877 0.0995741 5.28607 0.0380931 5.12548 0.0137472C4.96489 -0.0105984 4.80083 0.00286224 4.64636 0.0530596C4.49188 0.103257 4.35125 0.188806 4.23564 0.302903C4.12004 0.417 4.03265 0.556497 3.98043 0.710301L3.52343 2.1103C3.40884 2.44513 3.21967 2.74954 2.97022 3.00055C2.72076 3.25157 2.41753 3.44263 2.08343 3.5593L0.692428 4.0073C0.540653 4.0617 0.403522 4.15048 0.291767 4.26669C0.180011 4.3829 0.0966621 4.5234 0.0482407 4.67719C-0.000180673 4.83097 -0.0123605 4.99388 0.0126534 5.15315C0.0376676 5.31243 0.0991972 5.46376 0.192428 5.5953C0.320272 5.77475 0.501046 5.90972 0.709428 5.9813L2.08343 6.4263C2.52354 6.57278 2.90999 6.84713 3.19343 7.2143C3.35585 7.42494 3.4813 7.66164 3.56443 7.9143L4.01643 9.3053C4.08846 9.50859 4.22179 9.68452 4.39804 9.80882ZM4.48343 2.3943L5.01043 1.0173L5.44943 2.3943C5.61312 2.88745 5.88991 3.33546 6.25767 3.70253C6.62544 4.0696 7.07397 4.34554 7.56743 4.5083L8.97343 5.0373L7.59143 5.4853C7.09866 5.6496 6.65095 5.92646 6.28382 6.29393C5.9167 6.66141 5.64026 7.10938 5.47643 7.6023L4.95343 8.9803L4.50443 7.6013C4.34335 7.10803 4.06943 6.65913 3.70443 6.2903C3.3356 5.92226 2.88653 5.64467 2.39243 5.4793L1.01443 4.9573L2.40043 4.5073C2.88672 4.33867 3.32775 4.06051 3.68943 3.6943C4.04901 3.3266 4.32049 2.88211 4.48343 2.3943ZM10.5353 13.8513C10.6713 13.9475 10.8337 13.9992 11.0003 13.9993C11.1654 13.9994 11.3264 13.9484 11.4613 13.8533C11.6008 13.7548 11.7058 13.6149 11.7613 13.4533L12.0093 12.6913C12.0625 12.5329 12.1515 12.3888 12.2693 12.2703C12.3867 12.1518 12.5307 12.063 12.6893 12.0113L13.4613 11.7593C13.619 11.7048 13.7557 11.6024 13.8523 11.4663C13.9257 11.3633 13.9736 11.2444 13.9921 11.1193C14.0106 10.9942 13.9992 10.8665 13.9588 10.7467C13.9184 10.6268 13.8501 10.5183 13.7597 10.4299C13.6692 10.3415 13.5591 10.2759 13.4383 10.2383L12.6743 9.98933C12.5162 9.93676 12.3724 9.84814 12.2544 9.73048C12.1364 9.61281 12.0473 9.46932 11.9943 9.31133L11.7423 8.53833C11.6886 8.38048 11.586 8.24387 11.4493 8.14833C11.3473 8.07538 11.2295 8.02744 11.1056 8.00838C10.9816 7.98932 10.8549 7.99967 10.7357 8.0386C10.6164 8.07753 10.508 8.14395 10.4192 8.23249C10.3304 8.32104 10.2636 8.42923 10.2243 8.54833L9.97731 9.31033C9.92502 9.46798 9.83747 9.61162 9.72131 9.73033C9.60657 9.8468 9.46665 9.93541 9.31231 9.98933L8.53931 10.2413C8.38025 10.2952 8.2422 10.3978 8.1447 10.5346C8.04721 10.6713 7.99522 10.8353 7.99611 11.0032C7.99699 11.1712 8.0507 11.3346 8.14963 11.4703C8.24856 11.606 8.38769 11.7071 8.54731 11.7593L9.31031 12.0063C9.46917 12.0597 9.61358 12.149 9.73231 12.2673C9.85053 12.3856 9.93896 12.5302 9.99031 12.6893L10.2433 13.4633C10.2981 13.6198 10.4001 13.7554 10.5353 13.8513ZM9.62231 11.0583L9.44331 10.9993L9.62731 10.9353C9.92907 10.8304 10.2027 10.6576 10.4273 10.4303C10.6537 10.2013 10.8248 9.92359 10.9273 9.61833L10.9853 9.44033L11.0443 9.62133C11.1463 9.92803 11.3185 10.2067 11.5471 10.4352C11.7757 10.6636 12.0545 10.8356 12.3613 10.9373L12.5563 11.0003L12.3763 11.0593C12.0689 11.1615 11.7898 11.3342 11.5611 11.5636C11.3324 11.793 11.1606 12.0727 11.0593 12.3803L11.0003 12.5613L10.9423 12.3803C10.8409 12.0722 10.6687 11.792 10.4394 11.5625C10.2102 11.3329 9.93033 11.1602 9.62231 11.0583Z" fill="black" fill-opacity="0.8956" />
            </svg>
        },

        {
            note: 'Optimize my delivery pricing strategy for Delhi NCR using ..',
            emoji: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6834_133602)">
                    <path d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5ZM9.12922 4.30281e-05C8.59514 -0.00345791 8.08184 0.206807 7.7037 0.583987L1.02216 7.24852C0.239412 8.02928 0.238604 9.297 1.02036 10.0788L5.96875 15.0271C6.7498 15.8082 8.01613 15.8082 8.79718 15.0271L15.428 8.39633C15.8038 8.02054 16.0146 7.51063 16.0138 6.97917L16.0065 2.02911C16.0049 0.930807 15.1179 0.0393006 14.0196 0.032101L9.12922 4.30281e-05ZM8.4099 1.29199C8.59897 1.1034 8.85562 0.998271 9.12266 1.00002L14.013 1.03208C14.5622 1.03568 15.0057 1.48143 15.0065 2.03058L15.0138 6.98065C15.0142 7.24637 14.9088 7.50133 14.7209 7.68923L8.09007 14.32C7.69955 14.7106 7.06638 14.7106 6.67586 14.32L1.72746 9.37164C1.33659 8.98077 1.33699 8.34691 1.72836 7.95653L8.4099 1.29199Z" fill="black" fill-opacity="0.8956" />
                </g>
                <defs>
                    <clipPath id="clip0_6834_133602">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    ]

    const handleHomeApi = async () => {
        setIsLoading(true)
        try {
            const response = await axios.post("https://ondcapi.axai.ai/v1/ondc/insight", {
                source: "",
                destination: "",
                carrier: "",
                event: '',
                query: ''
            }, {
                withCredentials: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            setHomeApiData(response.data)
            console.log("APi is running")

        } catch (err) {
            console.log(err.response)
        } finally {
            setIsLoading(false)
        }
    }

    const handleCopilotApi = async () => {
        setIsPilotLoading(true)
        try {
            const response = await axios.post("https://ondcapi.axai.ai/v1/ondc/insight", {
                source: "",
                destination: "",
                carrier: "",
                event: '',
                query: userPrompt ? userPrompt : ''
            }, {
                withCredentials: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            setCopilotData(response.data)
            console.log("APi is running")

        } catch (err) {
            console.log(err.response)
        } finally {
            setIsPilotLoading(false)
        }
    }

    console.log(homeApiData)

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCopilotApi();
    };



    console.log(homeApiData?.trend_analysis?.Num_of_add_to_cart)
    const seriesSearch = homeApiData?.trend_analysis?.search;
    const seriesWishlist = homeApiData?.trend_analysis?.add_to_wishlist;
    const seriesCart = homeApiData?.trend_analysis?.add_to_cart;

    console.log("SeriesNumber", seriesSearch)

    return (
        <section>
            {[userData].map((item, index) => (
                <h1 key={index} className='text-4xl pb-5 px-8'>Welcome, {item?.firstName || user?.displayName || 'User'}</h1>
            ))}

            {/* border-b-2 border-gray-[#EBECEE] */}
            <div className='px-8 flex items-center justify-between'>
                <h1 className='text-[#667085] font-medium text-lg'>Track, manage and forecast your customers and orders.</h1>

                <div className='text-[#344054] font-medium flex items-center gap-3'>
                    <p className='bg-[#dee5f9] text-blue-500 py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out'>Overview</p>
                    <p className='hover:bg-[#dee5f9] py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out'>My Domains</p>
                    <p className='hover:bg-[#dee5f9] py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out'>Help</p>
                </div>
            </div>

            <div className='w-full my-11 py-8 px-4 bg-[#F0F1F3] flex flex-col items-center'>
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

                <div className='flex flex-col items-center py-12'>
                    <p className='font-light'>Here are some things ONDC Copilot can help you do</p>

                    <div className='flex items-center gap-3 pt-4'>
                        {CopilotSuggestions.map((item, index) => (
                            <div key={index} className='flex items-center gap-4 py-5 px-4 bg-white rounded-lg lg:w-fit w-full shadow-sm'>
                                <div>{item.emoji}</div>
                                <p>{item.note}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-2/3 pb-8 mx-auto'>
                    {isPilotLoading ?
                        <div className='flex justify-center items-center h-full w-full bg-white border-2 border-gray-200 shadow-sm p-4 rounded-lg'>
                            <div className='spinner' />
                        </div>
                        :
                        <div>
                            {copilotData?.llm_output ?
                                <div className='bg-white w-full py-4 px-6 rounded-lg'>
                                    <p className='text-lg'>{copilotData?.llm_output?.justification}</p>
                                    <div className='py-2 flex items-center gap-4'>
                                        <div className='border-2 border-gray-200 py-2 px-3 w-fit'>
                                            <p className='font-semibold'>Discount</p>
                                            <p className='text-2xl font-semibold pt-3'>{copilotData?.llm_output?.optimal_discount}%</p>
                                        </div>

                                        <div className='border-2 border-gray-200 py-2 px-3 w-fit'>
                                            <p className='font-semibold'>Profit</p>
                                            <p className='text-2xl font-semibold pt-3'>{copilotData?.llm_output?.predicted_profit}%</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='hidden'></div>
                            }
                        </div>
                    }
                </div>

                <form className='bg-white p-2 rounded-[40px] w-full lg:w-1/2 relative' onSubmit={handleSubmit}>
                    <input
                        value={userPrompt}
                        onChange={(e) => setUserPrompt(e.target.value)}
                        type="text"
                        className='w-full rounded-[40px] px-8 py-5 pr-32 border-2 border-[#F0F0F0] outline-2 outline-[#bac5e3]' // Added pr-20 for padding-right
                        placeholder='Start a conversation...'
                    />
                    <div className='absolute right-8 flex items-center gap-3 transform -translate-y-1/2 top-1/2'>
                        <img className='cursor-pointer' src={Mic} alt="mic" />
                        <button type='submit'>
                            <img className='cursor-pointer' src={Send} alt="send" />
                        </button>
                        <Link target='_blank' to={'https://wa.link/8vliis'}>
                            <img className='cursor-pointer' src={Whatsapp} alt="whatsapp" />
                        </Link>
                    </div>
                </form>
            </div>

            <div className='mt-12 px-8'>
                <p className='text-[#101828] text-3xl'>Network Activity</p>

                <div className='flex items-center gap-6 py-6'>

                    <div className='bg-white rounded-lg p-6 border-2 border-[#F0F0F0] flex-grow'>
                        <p className='font-semibold text-lg'>Searches</p>

                        {isLoading ?
                            <div className='mt-3'>
                                <div className='spinner' />
                            </div>
                            :
                            <div className='pt-4 flex items-center justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[#101828] text-4xl font-semibold'>{homeApiData?.trend_analysis?.Num_of_search}</p>
                                    {/* <p className='text-sm text-nowrap'>
                                    40%
                                    <span className='text-[#667085] ml-2'>vs last month</span>
                                </p> */}
                                </div>
                                <AreaGraph seriesName={"Search"} seriesData={seriesSearch} />
                            </div>
                        }

                    </div>

                    <div className='bg-white rounded-lg p-6 border-2 border-[#F0F0F0] flex-grow'>
                        <p className='font-semibold text-lg'>Added in cart</p>

                        {isLoading ?
                            <div className='mt-3'>
                                <div className='spinner' />
                            </div>
                            :
                            <div className='pt-4 flex items-center justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[#101828] text-4xl font-semibold'>{homeApiData?.trend_analysis?.Num_of_add_to_cart}</p>
                                    {/* <p className='text-sm text-nowrap'>
                                    40%
                                    <span className='text-[#667085] ml-2'>vs last month</span>
                                </p> */}
                                </div>
                                <AreaGraph seriesName={"Add to cart"} seriesData={seriesCart} />
                            </div>
                        }

                    </div>

                    <div className='bg-white rounded-lg p-6 border-2 border-[#F0F0F0] flex-grow'>
                        <p className='font-semibold text-lg'>Add to Wishlist</p>

                        {isLoading ?
                            <div className='mt-3'>
                                <div className='spinner' />
                            </div>
                            :
                            <div className='pt-4 flex items-center justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[#101828] text-4xl font-semibold'>{homeApiData?.trend_analysis?.Num_of_add_to_wishlist}</p>
                                    {/* <p className='text-sm text-nowrap'>
                                    40%
                                    <span className='text-[#667085] ml-2'>vs last month</span>
                                </p> */}
                                </div>
                                <AreaGraph seriesName={"Add to Wishlist"} seriesData={seriesWishlist} />
                            </div>
                        }

                    </div>
                </div>
            </div>


        </section>
    )
}

export default Home
