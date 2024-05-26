import React from 'react'

const DropdownFour = ({ title, selectedOption, handleSelect, isOpen, setOpenDropdown }) => {
    const options = {
        Travel: ['Flight', 'Option 1'],
        Accomodation: ['Accomodation', 'Option 2'],
        Grocery: ['Grocery', 'Option 3'],
        Food: ['Food', 'Option 4'],
        Electronics: ['Electronics', 'Option 5'],
    }[title];

    return (
        <div className="relative inline-block">
        <div
            className="cursor-pointer p-2 text-[#667085] rounded flex items-center gap-1 font-semibold"
            onClick={() => setOpenDropdown(isOpen ? null : title)}
        >
            {title}
            <svg
                className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>

        {isOpen && (
            <div className="absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-40 z-10">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer p-2 ${selectedOption === option ? 'bg-blue-500 text-white rounded-sm' : 'hover:bg-[#dee5f9]'}`}
                        onClick={() => {
                            if (selectedOption !== option) {
                                handleSelect(option);
                            }
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

export default DropdownFour
