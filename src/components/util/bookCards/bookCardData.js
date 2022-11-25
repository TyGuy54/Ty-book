import React from 'react';
import {invoke} from '@tauri-apps/api'

const retunedBookData = () => {
    let arr = []

    invoke('return_data').then((data) => {
        for (let index of data) {
            arr.push({
                    book_title: index.book_title,
                    page_title: index.page_title,
                    created_on: index.created_on,
                    content: index.content,
                    path: `/books/${index.book_title}/${index.content}`.replace(" ", ""),
                })
        } 
    })

    return arr
}


export const BookData = retunedBookData()