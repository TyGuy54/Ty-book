import React from 'react';
import {useState} from 'react';


export const MutliLineTextInput = () => {
    const [text, setText] = useState("")

    return(
        <>  
            <div>
                <textarea 
                        className="text-white resize-none bg-gray-700 p-5"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        cols={100}
                        rows={20}   
                    />
            </div>
            {/* <Button value={process_text_input}/> */}
        </>
    )
}