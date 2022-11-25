import React from 'react'
import {BookData} from './bookCardData'
import { Link } from 'react-router-dom';

export const BookCards = () => {
  return(
    <>
      {BookData.map((item, index) => {
        return(
          <Link to={item.path} key={index}>
            <div className="bg-gray-600 overflow-hidden shadow-lg mb-10">
              <div className="px-6 py-4 text-white">
                <div className="font-bold text-xl mb-2">
                  {item.book_title}
                </div>
              </div>
            </div>
          </Link>
        ) 
      })}
    </>
  )
}
