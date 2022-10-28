import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { BookData } from '../util/bookCards/bookCardData'

export const BooksPage = () => {
    let params = useParams()

    useEffect(() => {
        console.log(params)
    }, [])
    
    return( 
        <>
            <div className="bg-gray-800">
                <div className="h-screen bg-gray-800">
                    <div className="text-[90px] text-white text-center pt-5">
                        <h1>Cool Content</h1>
                        {BookData.map((item, index) => {
                            console.log(item)
                            return item.content
                        })}
                    </div>
                </div>
            </div>
        </> 
    )
}