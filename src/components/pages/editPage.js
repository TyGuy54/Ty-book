import React from 'react'
import { MakeBooks } from '../textInput/make_book'

export const EditPage = () =>{
    return(
        <>
            <div className=" bg-gray-800">
                <div className="h-screen bg-gray-800">
                    <div className="text-white text-center pt-5">
                        <MakeBooks/>
                    </div>
                </div>
            </div>
        </>
    )
}
