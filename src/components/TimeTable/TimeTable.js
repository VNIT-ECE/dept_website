import { useEffect, useState} from "react";
import './TimeTable.css'
const timeTableData = require('../timeTableData')
const dayTime = require('../dayTime')
const classes = require('../Row/code')
const TimeTable = () =>{

    var timeTable = timeTableData();
    var timeDate = dayTime();
    var currentC = classes()
    const [day,setDay] = useState();
    const [hour,setHour] = useState(timeDate.get("hour"));
    const [current,setCurrent] = useState("");
    const [monday,setMonday] = useState(Array.from(timeTable.get("monday"), ([name, value]) => ({ name, value })));
    const [tuesday,setTuesday] = useState(Array.from(timeTable.get("tuesday"), ([name, value]) => ({ name, value })));
    const [wednesday,setWednesday] = useState(Array.from(timeTable.get("wednesday"), ([name, value]) => ({ name, value })));
    const [thursday,setThursday] = useState(Array.from(timeTable.get("thursday"), ([name, value]) => ({ name, value })));
    const [friday,setFriday] = useState(Array.from(timeTable.get("friday"), ([name, value]) => ({ name, value })));
    const [saturday,setSaturday] = useState(Array.from(timeTable.get("saturday"), ([name, value]) => ({ name, value })));
    const [show,setShow] = useState(false);
    const update = () =>{
        setDay(timeDate.get("day"));
        setCurrent(currentC.ongoingClass);
    }
    setInterval(update,1);
    return(
        <div className="table_div">
            <div className="flex justify-center">
                <button type="button" className="px-6 py-3 my-5 shadow-md bg-teal-accent-700 hover:bg-teal-500 text-white" onClick={() => setShow(!show)}>{!show?("Full TimeTable"): ("Close TimeTable")}</button>
            </div>
        {show?(<div className="flex justify-center"><table className="Table">
        <thead>
            <tr className="Header">
                <th className="day_media">Day/Time</th>
                <th>9:00</th>
                <th>10:00</th>
                <th>11:00</th>
                <th>12:00</th>
                <th>1:00</th>
                <th>2:00</th>
                <th>3:00</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th className={day=="monday" ? "today_on" : "day"}>Monday</th>
                {monday.map(Element =>(
                    <th className={day=="monday" && current==Element.value ? "today_onClass" : "class"}>{Element.value}</th>
                ))}

            </tr>
            <tr>
                <th className={day=="tuesday" ? "today_on" : "day"}>Tuesday</th>
                {tuesday.map(Element =>(
                   <th className={day=="tuesday" && current==Element.value ? "today_onClass" : "class"}>{Element.value}</th>
                ))}
            </tr>
            <tr>
                <th className={day=="wednesday" ? "today_on" : "day"}>Wednesday</th>
                {wednesday.map(Element =>(
                    <th className={day=="wednesday" && current==Element.value ? "today_onClass" : "class"}>{Element.value}</th>
                ))}

            </tr>
            <tr>
                <th className={day=="thursday" ? "today_on" : "day"}>Thursday</th>
                {thursday.map(Element =>(
                    <th className={day=="thursday" && current==Element.value ? "today_onClass" : "class"}>{Element.value}</th>
                ))}
            </tr>
            <tr>
                <th className={day=="friday" ? "today_on" : "day"}>Friday</th>
                {friday.map(Element =>(
                    <th className={day=="friday" && current==Element.value ? "today_onClass" : "class"}>{Element.value}</th>
                ))}
            </tr>
            <tr>
                <th className={day=="saturday" ? "today_on" : "day"}>Saturday</th>
                {saturday.map(Element =>(
                    <th className={day=="saturday" && current==Element.value ? "today_onClass" : "class"}>{Element.value}</th>
                ))}
            </tr>
            </tbody>
        </table></div>): null}
        </div>
    )

}
export default TimeTable;
