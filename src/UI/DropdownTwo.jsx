import React from 'react'

const DropdownTwo = ({ title, selectedOption, handleSelect, isOpen, setOpenDropdown }) => {

    const options = {
        Time: ['1 Hour', '1 Day', '1 Week', '1 Month', '1 Quater' ,'1 Year', 'All Time'],
        Event: ["Search",
        "Select",
        "View",
        "Add to cart",
        "Remove from cart",
        "Purchase",
        "Wishlist add",
        "Wishlist remove",
        "Cancel order",
        "Refund order",
        "Reorder",
        "Rate item positive",
        "Rate item negative"],
    }[title];

    return (
        <div className="relative inline-block min-w-36">
            <div
                className="cursor-pointer p-2 border-2 border-gray-300 rounded-lg flex justify-between items-center text-nowrap"
                onClick={() => setOpenDropdown(isOpen ? null : title)}
            >
                {selectedOption ? `${title}: ${selectedOption}` : title}
                <svg 
                    className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            {isOpen && (
                <div className="absolute right-0 h-72 overflow-y-scroll top-full mt-1 bg-white border border-gray-300 rounded shadow-lg w-full z-10">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer p-2 hover:bg-blue-500 hover:text-white ${selectedOption === option ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => {
                                handleSelect(option);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownTwo
