import { useState } from 'react'
import RowComp from './classesRow/rowComp'

const classes = require('./code');

const Row = ({sem}) => {

    const [onClass, setOnClass] = useState("");
    const [onTime, setOnTime] = useState("");
    const [onLink, setOnLink] = useState("");
    const [upClass, setUpClass] = useState("");
    const [upTime, setUpTime] = useState("");
    const [upLink, setUpLink] = useState("");

    const setter = () => {
        var data = classes(sem);
        setOnClass(data.ongoingClass);
        setOnTime(data.ongoingClassTime);
        setOnLink(data.ongoingLink);
        setUpClass(data.upcomingClass);
        setUpTime(data.upcomingClassTime);
        setUpLink(data.upcomingLink);
    }
    setInterval(setter, 1);
    return (
        <section id="timetable">
            <div className="mx-auto text-center my-10">
                <div className="text-5xl font-bold text-black">Time Table</div>
                <p className="text-lg text-black font-normal mt-5">Get important books, notes, youtube channel, assignment and <br /> syllabus at one place.</p>
            </div>
            <RowComp row_type="Ongoing Class" class_name={onClass} time_of_class={onTime} join_link={onLink} button_status={(onClass == "No Ongoing Class") ? 0 : 1}></RowComp>
            <RowComp row_type="Upcoming Class" class_name={upClass} time_of_class={upTime} join_link={upLink} button_status={(upClass == "No Upcoming Class") ? 0 : 1} ></RowComp>
        </section>
    )
}
export default Row;