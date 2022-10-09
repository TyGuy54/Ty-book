import React from 'react'
import {BookCards} from '../util/bookCards/bookCards'
import * as AiIcons from 'react-icons/ai';

export const ViewPage = () => {
    // make cards that has the name of the card and the date that was created
    // when clicked on it will show the users notes
    // also have a pen and paper that when the clicked will show the edit page
    // to add a new book.
    return (
        <div className=" bg-gray-800">
            <div className="h-screen bg-gray-800">
                <div className="text-[90] text-white text-center pt-5">
                    <h3>Edit Page</h3>
                </div>
                <div className="px-96 py-10">
                    <BookCards/>
                </div>
            </div>
        </div>
    )
}
