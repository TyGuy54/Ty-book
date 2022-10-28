import React from 'react';
import {MutliLineTextInput} from './textInput'
import {useState} from 'react';
import {Button} from '../util/button'
import {invoke} from '@tauri-apps/api'

export const MakeBooks = () => {
    const [bookTitle, setBookTitle] = useState("")
    const [pageTitle, setPageTitle] = useState("")
    const [pageContent, setPageContent] = useState("")

    const process_text_input = async (book_title, page_title, page_content, e) => {
        e.preventDefault();
        await invoke('insert_into_db', {bookName: book_title, pageName: page_title, pageContent: page_content})
    }

    const make_db = async (e) => {
        e.preventDefault();
        await invoke('database_setup')
    }

    return(
        <>  
        <div className="pt-10 pl-96">
            <div className="w-full max-w-xs">
                <form>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Book Title
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            value={bookTitle}
                            onChange={(e) => setBookTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Page Titl
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            value={pageTitle}
                            onChange={(e) => setPageTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Page Content
                        </label>
                        <MutliLineTextInput text={pageContent} setText={(e) => setPageContent(e.target.value)}/>
                        <Button
                            name="Submit"
                            click={(e) => process_text_input(bookTitle, pageTitle, pageContent, e)}
                        />
                        <Button
                            name="Make DB"
                            click={(e) => make_db(e)}
                        />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}