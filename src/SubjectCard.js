import React from "react";
const SubjectCard = (props)=>{



  return(
    <div>

      <div className="m-5 h-40 w-40 shadow-lg border- border-gray-200 flex items-center cursor-pointer rounded-3xl" onClick={() => props.call(props.data)}>
        <p className="font-bold text-gray-600 text-5xl mx-auto">{props.data.subName}</p>
      </div>

      <a href="/dummy_book.txt" download>
      <div className="text-gray-400 text-sm m-5 h-10 w-40 shadow-sm border-2 border-gray-200 flex justify-between items-center hover:border-0 hover:shadow-md">
        <p className="font-medium ml-3">SYLLABUS</p>
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
