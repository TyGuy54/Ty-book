export const Button = (props) => {
    return (
        <div>
            <button 
                className="bg-blue-400 rounded-full m-5 p-3 font-bold"
                onClick={props.click}
            >  
                {props.name}
            </button>
        </div>
    )
}