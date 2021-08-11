import React, {useState} from "react";
import SubjectCard from "./SubjectCard";
import ModalBox from "./ModalBox";




const Resources = ()=> {
  const subs = [
                { id: 1, subName: "AC", books: ["a", "b", "c"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 2, subName: "CE", books: ["b", "c", "d"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 3, subName: "ES", books: ["a", "b", "c"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 4, subName: "MI", books: ["b", "c", "d"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 5, subName: "WA", books: ["a", "b", "c"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 6, subName: "CAO", books: ["b", "c", "d"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 7, subName: "CMOS", books: ["a", "b", "c"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 8, subName: "ESD", books: ["b", "c", "d"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 9, subName: "ALGO", books: ["b", "c", "d"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]}
              ];

  const [modalContent, setModalContent] = useState(null);

  const showModal = (sub)=>{
    setModalContent(sub);
  }

  return(
    <section id="resourses">

    <div className="flex justify-center">
      <button className="mx-auto text-center text-4xl rounded bg-teal-accent-400 shadow-xl my-10 px-6 py-3 text-white">Resources</button>
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
