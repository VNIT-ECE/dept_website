import React from "react";
const SubjectCard = (props)=>{



  return(
    <div className="m-5 z-10">
      <div className="h-72 w-72 rounded shadow-xl flex items-center cursor-pointer bg-white" onClick={() => props.call(props.data)}>
        <p className="font-bold text-teal-accent-400 text-5xl mx-auto">{props.data.subName}</p>
      </div>

      <div className="mt-5 cursor-pointer rounded px-6 py-3 h-10 w-full bg-teal-accent-700 text-white flex justify-between items-center hover:shadow-md">
        <p className="font-medium ml-3 tracking-wide">View Syllabus</p>
        <div className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
