import React from 'react'
import {MutliLineTextInput} from '../textInput/textInput'
import { MakeBooks } from '../textInput/make_book'

export const EditPage = () =>{
    return(
        <>
            {/* <div className="bg-[#15171c] h-[80px] flex justify-start content-center"></div> */}
            <div className=" bg-gray-800">
                <div className="h-screen bg-gray-800">
                    <div className="text-[90] text-white text-center pt-5">
                        <MakeBooks/>
                    </div>
                </div>
            </div>
        </>
    )
}