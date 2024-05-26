import React, { useEffect, useState } from 'react';
import axios from 'axios'
import AddProductForm from '../UI/AddProductForm'
import CreateLinkForm from '../UI/CreateLinkForm'
import ProgressBar from '../UI/ProgressBar/ProgressBar'
import CheckForm from '../UI/CheckForm'
import Apples from "../Images/apples.webp";
import Cabbage from "../Images/cabbage.jpg";
import Chicken from "../Images/chicken.webp";
import Oil from "../Images/cookingOil.jpg";
import Eggs from "../Images/eggs.webp";
import Paneer from "../Images/paneer.jpg";
import Potato from "../Images/potatoes.avif";
import RedChilli from "../Images/redChilliPowder.jpg";
import Salt from "../Images/salt.webp";
import Tomato from "../Images/tomatoes.jpeg";
import Turmeric from "../Images/turmeric.webp";

const InfluencerAddForm = () => {

    const [data, setApiData] = useState([]);
    const [checkedData, setCheckedData] = useState([]);
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(0);
    const [selectAll, setSelectAll] = useState(false);
    const [dataCheckbox, setDataCheckbox] = useState([]);

    const FormTitles = ["Add Products", "Check Products", "Create Link", "Link Created"]
    const FormSub = ["Search and add products for creating the referral link", "Check your products", "Create referral links", "Link Created Successfully"]

    const PageDisplay = () => {
        if (page === 0) {
            return <AddProductForm handleSearch={handleSearch} results={results} input={input} handleCheck={handleCheck} checkedData={checkedData} page={page} setPage={setPage} FormTitles={FormTitles}
                selectAll={selectAll} handleSelectAll={handleSelectAll} dataCheckbox={dataCheckbox} handleCheckBoxDataChange={handleCheckBoxDataChange}
            />
        } else if (page === 1) {
            return <CheckForm checkedData={checkedData} handleDelete={handleDelete} page={page} setPage={setPage} FormTitles={FormTitles} />
        } else {
            return <CreateLinkForm checkedData={checkedData} handleDelete={handleDelete} page={page} setPage={setPage} FormTitles={FormTitles} />
        }
    }

    // const handleAPI = async (url) => {
    //     try {
    //         const response = await axios.get(
    //             "https://jsonplaceholder.typicode.com/users",
    //         );
    //         setApiData(response.data);

    //         const result = response.data.filter((user) => {
    //             return (
    //                 url && user && user.name && user.name.toLowerCase().includes(url)
    //             );
    //         });
    //         setResults(result);
    //         setDataCheckbox(Array(result.length).fill(false));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const handleAPI = (url) => {

        const response = [
            {
                img: Paneer,
                name: 'Paneer'
            },
            {
                img: Chicken,
                name: 'Chicken'
            },
            {
                img: Potato,
                name: 'Potatoes'
            },
            {
                img: Eggs,
                name: 'Eggs'
            },
            {
                img: Tomato,
                name: 'Tomatoes'
            },
            {
                img: Salt,
                name: 'Salt'
            },
            {
                img: Oil,
                name: 'Sunflower Oil'
            },
            {
                img: Apples,
                name: 'Apples'
            },
            {
                img: Cabbage,
                name: 'Cabbage'
            },
            {
                img: RedChilli,
                name: 'Red Chilli Powder'
            },
            {
                img: Turmeric,
                name: 'Turmeric Powder'
            },
        ];
        setApiData(response);

        const result = response.filter((user) => {
            return (
                url && user && user.name && user.name.toLowerCase().includes(url)
            );
        });
        setResults(result);
        setDataCheckbox(Array(result.length).fill(false));

    };

    // console.log(data)

    useEffect(() => {
        handleAPI()
    }, [])

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setDataCheckbox(dataCheckbox.map(() => !selectAll))
    }

    const handleCheckBoxDataChange = (index) => {
        const updatedCheckboxes = [...dataCheckbox];
        updatedCheckboxes[index] = !updatedCheckboxes[index];
        setDataCheckbox(updatedCheckboxes)

        setSelectAll(updatedCheckboxes.every((checkbox) => checkbox));
    }

    const handleSearch = (value) => {
        setInput(value);
        handleAPI(value);
    }

    const handleCheck = (id) => {
        const isChecked = checkedData.includes(id);
        if (isChecked) {
            setCheckedData(checkedData.filter((itemId) => itemId !== id));
        } else {
            setCheckedData([...checkedData, id]);
        }
    };

    const handleDelete = (id) => {
        const updatedChecked = checkedData.filter((itemId) => itemId !== id);
        setCheckedData(updatedChecked);
    };

    return (
        <section>
            <div>

                <div className='px-10 pt-8'>

                    <div className='py-6 w-full text-center'>
                        <h1 className='text-3xl font-medium leading-[38px]'>{FormTitles[page]}</h1>
                        <p className='text-[#667085] text-base leading-[24px]'>{FormSub[page]}</p>
                    </div>

                    <div className='w-[796px] m-auto relative'>

                        <div className='flex gap-4 items-center justify-center text-[#667085]'>
                            <ProgressBar page={page} />
                        </div>

                    </div>
                </div>

                <div className='flex gap-8 px-8'>

                    {/* left box  */}
                    <div className=' pt-8 pb-12 m-auto'>

                        {PageDisplay()}

                    </div>

                </div>

            </div>
        </section>
    )
}

export default InfluencerAddForm;