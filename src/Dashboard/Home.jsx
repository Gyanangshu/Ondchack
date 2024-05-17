import React, { useEffect, useState } from 'react'
import BarGraph from '../UI/BarGraph'
import { UserAuth } from '../Context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig';
import VerticalBarGraph from '../UI/VerticalBarGraph';

const Home = () => {

    const { user } = UserAuth();
    const [userData, setUserData] = useState([]);
    const [categoryOption, setCategoryOption] = useState('');
    const [selectedOption, setSelectedOption] = useState([500, 300, 200]);
    const [colors, setColors] = useState('')

    const handleDropdownChange = (event) => {
        setCategoryOption(event.target.value)
        const value = event.target.value;
        if (value === 'Electronics') {
            setSelectedOption([500, 300, 200]);
            setColors(['#3E86F0']);
        } else if (value === 'Home Appliances') {
            setSelectedOption([400, 250, 150]);
            setColors(['#d46f0b']);
        } else if (value === 'Fashion') {
            setSelectedOption([350, 200, 120]);
            setColors(['#A020F0']);
        }
    };

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
    }, [user])

    const data = [
        { label: 'Total Searches', value: 1500, color: '#1E90FF' },
        { label: 'Total Add to Carts', value: 800, color: '#32CD32' },
        { label: 'Total Purchases', value: 600, color: '#FF6347' },
    ];

    const maxValue = Math.max(...data.map((item) => item.value));

    return (
        <section>
            {[userData].map((item, index) => (
                <h1 className='text-4xl pb-8'>Welcome, {item?.firstName || user?.displayName || 'User'}</h1>
            ))}


            <div className='lg:w-1/2 w-full shadow-sm'>
                <div className='border border-gray-300 p-3 rounded-t-xl'>
                    <p className='text-3xl font-medium tracking-wide'>Summary Insights Widget</p>
                </div>

                <div className='border border-gray-300 rounded-b-xl'>
                    <ul className='py-4 px-5 flex flex-col gap-3'>
                        {data.map((item, index) => (
                            <li key={index} className='flex justify-between items-center'>
                                <p className='text-lg text-nowrap '>{item.label}</p>
                                <div className='flex-grow mx-2'>
                                    <BarGraph value={item.value} maxValue={maxValue} color={item.color} />
                                </div>
                                <p className='text-lg'>{item.value}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='shadow-sm w-full pt-10'>
                <div className='border border-gray-300 p-3 rounded-t-xl'>
                    <p className='text-3xl font-medium tracking-wide'>General Trends Widget</p>
                </div>

                <div className='border border-gray-300 rounded-b-xl px-3 py-4'>
                    <select value={categoryOption} onChange={handleDropdownChange} className='outline-1 border border-gray-300 outline-[#4285F4] p-2 rounded-lg cursor-pointer'>
                        <option className='' value={"Electronics"}>
                            Electronics
                        </option>
                        <option className='' value={"Home Appliances"}>
                            Home Appliances
                        </option>
                        <option className='' value={"Fashion"}>
                            Fashion
                        </option>
                    </select>

                    <div className='w-full mt-6'>
                        <VerticalBarGraph data={selectedOption} colors={colors}/>
                    </div>
                </div>

            </div>

            <BarGraph />
        </section>
    )
}

export default Home
