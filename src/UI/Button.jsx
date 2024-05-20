import React from 'react'

const Button = (props) => {
    return (
        <div className={`${props.div}`}>
            <button className={`bg-[#1f78be] rounded-lg text-base font-semibold py-3 px-4 hover:scale-[1.02] transition-all duration-300 ease-in-out flex items-center justify-center gap-3 ${props.style}`} type='submit' onClick={props.event} >
                {props.img && <img className={props.imgClass} src={props.img} alt="icon" />}
                <p className={props.textStyle}>{props.text}</p>
            </button>
        </div>
    )
}

export default Button
