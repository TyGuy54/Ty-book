import React from 'react';
import {useState} from 'react';
import {Button} from '../util/button'
import {invoke} from '@tauri-apps/api'

export const MakeBooks = () => {
    const [text, setText] = useState("")

    const process_text_input = async () => {
        await invoke('make_book_db')
        console.log(text)
    }

    return(
        <>  
        <div className="grid place-items-center pt-36">
            <div class="w-full max-w-xs ">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                    <h4 class="text-gray-700 pb-5">Make a Book</h4>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Book Title
                    </label>
                    <input 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text" 
                        value={text}
                        onChange={(e) => setText(console.log(e.target.value))}
                    />
                    </div>
                    <div class="mb-6">
                    </div>
                </form>
            </div>
        </div>
            <Button value={process_text_input}/>
        </>
    )
}