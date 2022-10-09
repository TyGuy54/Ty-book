import React from 'react'
import {ViewPage} from './viewPage'
import { MakeBooks } from '../textInput/make_book'

export const EditPage = () =>{
    return(
        <>
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
