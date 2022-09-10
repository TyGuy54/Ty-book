import React from 'react'
import {MutliLineTextInput} from '../textInput/textInput'

export const MainPage = () =>{
    return(
        <>
            <div className="bg-[#15171c] h-[80px] flex justify-start content-center"></div>
            <div className="h-screen bg-gray-800">
                <div className="h-screen bg-gray-800">
                    <div className="text-[90] text-white text-center pt-5">
                        <MutliLineTextInput/>
                    </div>
                </div>
            </div>
            
        </>
    )
}

