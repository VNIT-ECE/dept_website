import { useState } from 'react'
import RowComp from './classesRow/rowComp'
import Title from './classesRow/title';
const classes = require('./code');

const Row = () =>{

    const [onClass,setOnClass] = useState("");
    const [onTime,setOnTime] = useState("");
    const [onLink,setOnLink] = useState("");
    const [upClass,setUpClass] = useState("");
    const [upTime,setUpTime] = useState("");
    const [upLink,setUpLink] = useState("");

    const setter = () =>{
        var data = classes();
        setOnClass(data.ongoingClass);
        setOnTime(data.ongoingClassTime);
        setOnLink(data.ongoingLink);
        setUpClass(data.upcomingClass);
        setUpTime(data.upcomingClassTime);
        setUpLink(data.upcomingLink);
    }
    setInterval(setter,1)
return(
    <div>
        <div className="flex justify-center">
          <button className="mx-auto text-center text-4xl rounded bg-teal-accent-400 shadow-xl my-10 px-6 py-3 text-white">Time Table</button>
        </div>
        <RowComp  row_type="Ongoing Class" class_name={onClass} time_of_class={onTime} join_link={onLink} button_status={(onClass == "No Ongoing Class") ? 0 : 1}></RowComp>
        <RowComp row_type="Upcoming Class" class_name={upClass} time_of_class={upTime} join_link={upLink} button_status={(upClass == "No Upcoming Class") ? 0 : 1} ></RowComp>
    </div>
)
}
export default Row;
