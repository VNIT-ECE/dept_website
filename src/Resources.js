import React, {useState} from "react";
import SubjectCard from "./SubjectCard";
import ModalBox from "./ModalBox";
import subs from "./Subs"



const Resources = ()=> {
  
  const [modalContent, setModalContent] = useState(null);

  const showModal = (sub)=>{
    setModalContent(sub);
  }

  return(
    <section id="resources">

    <div className="flex justify-center">
      <div className="mx-auto text-center text-4xl rounded bg-teal-accent-700 shadow-xl my-10 px-6 py-3 text-white">Resources</div>
    </div>

    <div className="flex justify-center flex-wrap relative bg-gray-100">

      {subs.map((sub)=>{
        return (<SubjectCard key={sub.id} data={sub} call={showModal} />);
      })}

      {
        modalContent? <ModalBox modalContent={modalContent} call={showModal} />: null
      }
    </div>
    </section>
  );

}

export default Resources;
