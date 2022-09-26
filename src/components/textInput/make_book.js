import React from 'react';
import {MutliLineTextInput} from './textInput'
import {useState} from 'react';
import {Button} from '../util/button'
import {invoke} from '@tauri-apps/api'

export const MakeBooks = () => {
    const [text, setText] = useState("")

    const process_text_input = async (data) => {
        await invoke('insert_into_book', {data: data})
    }

    const make_db = async () => {
        await invoke('make_book_db')
    }

    return(
        <>  
        <div className="pt-10 pl-96">
            <div className="w-full max-w-xs">
                <form >
                    <div className="mb-4">
                        <h2 className="text-white font-semibold pb-5">Make a Book</h2>
                        <label className="block text-white text-sm font-semibold mb-2 mr-60">
                            Book Title
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            type="text" 
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <h2 className="text-white font-semibold pb-5 mt-10">Make a Page</h2>
                        <label className="block text-white text-sm font-semibold mb-2 mr-60">
                            Page Title
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            type="text" 
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <label className="block text-white text-sm font-semibold mb-2 mr-60 mt-10">
                            Page Content
                        </label>
                        <MutliLineTextInput/>
                        <Button 
                            click={() => {process_text_input(text)}}
                            name="make book"
                        />
                    </div>
                    <div className="mb-6">
                    </div>
                </form>
            </div>
        </div>
            <Button 
                click={make_db}
                name="make db"
            />
        </>
    )
}