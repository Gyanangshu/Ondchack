import React from 'react'

const DropdownTwo = ({ title, selectedOption, handleSelect, isOpen, setOpenDropdown }) => {

    const options = {
        Time: ['1 Hour', '1 Day', '1 Week', '2 Month', '1 Quater', '1 Year', 'All Time'],
        Event: ["Search",
            "Add to cart",
            "Add to Wishlist",
            "Select",
            "View",
            "Remove from cart",
            "Purchase",
            "Wishlist remove",
            "Cancel order",
            "Refund order",
            "Reorder",
            "Rate item positive",
            "Rate item negative"],
    }[title];

    // List of disabled options
    const disabledOptions = {
        Time: ['1 Hour', '1 Day', '1 Week', '1 Quater', '1 Year', 'All Time'],
        Event: ["Select",
            "View",
            "Remove from cart",
            "Purchase",
            "Wishlist remove",
            "Cancel order",
            "Refund order",
            "Reorder",
            "Rate item positive",
            "Rate item negative"
        ],
    }[title];

    return (
        <div className="relative inline-block min-w-48">
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
                <div className="absolute w-full right-0 max-h-72 overflow-y-scroll top-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
                    {options.map((option, index) => {
                        const isDisabled = disabledOptions.includes(option);
                        return (
                            <div
                                key={index}
                                className={`cursor-pointer p-2 ${isDisabled ? 'cursor-not-allowed text-gray-400' : 'hover:bg-blue-500 hover:text-white'} ${selectedOption === option ? 'bg-blue-500 text-white' : ''}`}
                                onClick={() => {
                                    if (!isDisabled) {
                                        handleSelect(option);
                                    }
                                }}
                            >
                                {isDisabled ?
                                    <p className='text-nowrap'>{option}</p>
                                    :
                                    <div className='flex items-center justify-between'>
                                        <p>{option}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                    </div>
                                }
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default DropdownTwo
