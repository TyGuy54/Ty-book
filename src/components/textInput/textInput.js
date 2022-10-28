import React from 'react';

export const MutliLineTextInput = (props) => {
 
    return(
        <>  
            <div>
                <textarea 
                        className="text-white resize-none bg-gray-700 p-5"
                        value={props.text}
                        onChange={props.setText}
                        cols={100}
                        rows={20}   
                    />
            </div>
        </>
    )
}