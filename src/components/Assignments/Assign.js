import React,{ useState } from 'react'

function Assign(props) {

    const sem5_deadlines= "https://docs.google.com/spreadsheets/d/1h5nhxVeQTRFLt9t8a9JV7ZcaQIMJrvQhf1hUQjqtlJk/preview";
    const [deadlines,setDeadlines] = useState("");
    const [showFlag,setFlag] = useState(false);
    const showDeadlines = () =>{
        setDeadlines(sem5_deadlines);
        setFlag(!showFlag);
    }
    return (
        <div>
            <div className="flex justify-center">
                <button type="button" className="px-6 py-3 my-5 shadow-md bg-teal-accent-700 hover:bg-teal-500 text-white" onClick={showDeadlines}>{!showFlag?("Assignment Deadlines"): ("View Less")}</button>
            </div>
            <div>
                {showFlag===true? 
                <div><br></br><iframe key={deadlines} className="w-full" title={deadlines} src={deadlines}></iframe></div>  : <></>}

            </div>
        </div>
    )
}

export default Assign
