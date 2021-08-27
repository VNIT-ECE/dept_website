import React from "react";
const SubjectCard = (props)=>{



  return(
    <div className="m-5 z-10">
      <div className="h-48 w-80 rounded-3xl shadow-xl flex items-center cursor-pointer bg-white" onClick={() => props.call(props.data)}>
        <p className="font-bold text-gray-800 text-3xl mx-auto">{props.data.subName}</p>
      </div>
    </div>
  );
};

export default SubjectCard;
