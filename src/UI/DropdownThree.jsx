import React from 'react'

const DropdownThree = ({ title, selectedOption, handleSelect, isOpen, setOpenDropdown }) => {

    const options = {
        Source: ["Delhi", "Mumbai", 'Bengaluru', 'Kolkata', 'Hyderabad'],
        Destination: ["Delhi", "Mumbai", 'Bengaluru', 'Kolkata', 'Hyderabad'],
        Airline: ['Indigo', "Air India", 'SpiceJet', 'Vistara']
    }[title];

    return (
        <div className="relative inline-block w-full">
            <div
                className="cursor-pointer p-2 border-2 border-gray-300 rounded-lg flex justify-between items-center"
                onClick={() => setOpenDropdown(isOpen ? null : title)}
            >
                {selectedOption || title}
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

export default DropdownThree
