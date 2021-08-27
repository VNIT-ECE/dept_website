import React, {useState} from "react";
import SubjectCard from "../SubjectCard";
import ModalBox from "./ModalBox";
import subs from "./Subs"



const Resources = ()=> {
  
  const [modalContent, setModalContent] = useState(null);

  const showModal = (sub)=>{
    setModalContent(sub);
  }

  return(
    <section id="resources">

      <div className="mx-auto text-center my-10">
        <div className="text-5xl font-bold text-black">Resources</div>
        <p className="text-lg text-black font-normal mt-5">Get important books, notes, youtube channel, assignment and <br /> syllabus at one place.</p>
      </div>

      <div className="flex justify-center flex-wrap relative green-gradient-bg rounded-3xl p-5">

      {subs.map((sub)=>{
        return (<SubjectCard key={sub.id} data={sub} call={showModal} />);
      })}

      {
        modalContent? <ModalBox modalContent={modalContent} call={showModal}  />: null
      }
    </div>
    </section>
  );

}

export default Resources;
