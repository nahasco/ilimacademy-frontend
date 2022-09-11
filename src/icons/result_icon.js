import React from 'react'

export default function Result_icon({result}) {

    if (result == "upgrade") {
        return (
            <svg className='result-icon' width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"  fill='#ebf8f0' stroke="#0FC069" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.46997 13.26L12 9.73999L15.53 13.26" stroke="#0FC069" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    if (result == "downgrade") {
        return (
            <svg className='result-icon' width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill='#FFEDEC' stroke="#FE4949" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.46997 10.74L12 14.26L15.53 10.74" stroke="#FE4949" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
    }
