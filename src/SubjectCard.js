import React from "react";
const SubjectCard = (props)=>{



  return(
    <div className="m-5 z-10">
      <div className="h-72 w-72 rounded shadow-xl flex items-center cursor-pointer bg-white" onClick={() => props.call(props.data)}>
        <p className="font-bold text-teal-accent-400 text-5xl mx-auto">{props.data.subName}</p>
      </div>

      <a href="/dummy_book.txt" download>
      <div className="mt-5 rounded px-6 py-3 h-10 w-full bg-teal-accent-700 text-white flex justify-between items-center hover:shadow-md">
        <p className="font-medium ml-3 tracking-wide">Syllabus</p>
        <div className="mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        </div>
      </div>
      </a>
    </div>
  );
};

export default SubjectCard;
