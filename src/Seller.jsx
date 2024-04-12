import { useEffect, useState } from "react";
import axios from "axios";

const Seller = () => {
    const [apiData, setApiData] = useState([]);
    const [pincode, setPincode] = useState("");
    const [isValue, setIsValue] = useState("");
    const [isEvent, setIsEvent] = useState("");
    const [select, setSelect] = useState("Search By Pincode");

    const [categoryApi, setCategoryApi] = useState([]);
    const [category, setCategory] = useState("");

    const Search_Headings = ["Search By Pincode", "Search By Category"];

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

    const handleSelectHeadings = (item) => {
        setSelect(item);
        console.log(select);
    };

    const handleAPI = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8001/insight/${pincode ? `?pincode=${pincode}` : ""}${isValue ? `&value=${isValue}` : ""
                }${isEvent ? `&event=${isEvent}` : ""}`
            );
            setApiData(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAPI();
    };

    const handleCategoryAPI = async () => {
        try {
            const categoryData = await axios.get(
                `http://localhost:8001/insight/category/${category ? `?category=${category}` : ""
                }`
            );
            setCategoryApi(categoryData.data);
            console.log(categoryData.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCategorySubmit = (e) => {
        e.preventDefault();
        handleCategoryAPI();
    };

    useEffect(() => {
        setSelect("Search By Pincode");
    }, []);

    return (
        <section>
            <h1 className="seller-heading">ONDC Seller Hub</h1>

            <div className="select-heading-container">
                {Search_Headings.map((head) => (
                    <p
                        className={`${select === head ? "select-heading-active" : "select-heading"
                            }`}
                        onClick={() => handleSelectHeadings(head)}
                    >
                        {head}
                    </p>
                ))}
            </div>

            {select === "Search By Category" ? (
                <>
                    <form onSubmit={handleCategorySubmit}>
                        <div className="category-container form-container">
                            <div className="category-input-container form-input-containers">
                                {/* <label className="input-label" htmlFor="category">
                                    Category
                                </label> */}
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
                    <div className="info-container">
                        {Object.entries(categoryApi).map(([pincode, categories]) => (
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
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-container">
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
                        <div>
                            <button className="form-button" type="submit">
                                Fetch Data
                            </button>
                        </div>
                    </form>
                    <div className="info-container">
                        {Object.entries(apiData).map(([category, products]) => (
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
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};
export default Seller;