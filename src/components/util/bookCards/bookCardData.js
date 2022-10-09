import React from 'react';
import {invoke} from '@tauri-apps/api'

const retunedBookData = () => {
    let arr = []

    invoke('return_data').then((data) => {
        for (let index of data) {
            arr.push({
                    title: index.book_title,
                    path: `/books/${index.book_title}`,
                })
        } 
    })

    return arr
}


export const BookData = retunedBookData()