import React from 'react'
import { useParams } from 'react-router-dom'
import { BookData } from '../util/bookCards/bookCardData'

export const BooksPage = () => {

    let params = useParams()
    let titles = params.type

    const bookTitle = () => {
        for (let title of BookData) {
            if (titles.includes(title.book_title.replace(" ", ""))) {
                return title.page_title
            }
        }
    }

    const content = () => {
        let content = params.content

        if (titles) {
            return content
        }
        else {
            return `This is not ${params.type}`
        }
    }

    return( 
        <>
            <div className="bg-gray-800">
                <div className="h-screen bg-gray-800">
                    <div className="text-white text-justify pt-5 pl-80 bg-gray-800">
                        <h1 className="text-[50px]">{bookTitle()}</h1>
                        <div className="pl-0 min-h-[200px] p-[12px] w-8/12">
                            {content()}
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}