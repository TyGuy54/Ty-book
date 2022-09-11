import React from 'react';
import {useState} from 'react';
import {Button} from '../util/button'
import {invoke} from '@tauri-apps/api'

export const MutliLineTextInput = () => {
    const [text, setText] = useState("")

    const process_text_input = async () => {
        await invoke('make_books')
        console.log(text)
    }

    return(
        <>  
            <div>
                <textarea 
                        className="text-white resize-none bg-gray-700 p-5"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        cols={125}
                        rows={20}   
                    />
            </div>
            <Button value={process_text_input}/>
        </>
    )
}