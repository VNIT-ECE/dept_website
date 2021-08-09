import React, {useState} from "react";
import SubjectCard from "./SubjectCard";
import ModalBox from "./ModalBox";




const Resources = ()=> {
  const subs = [
                { id: 1, subName: "A", books: ["a", "b", "c"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 2, subName: "B", books: ["b", "c", "d"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 3, subName: "C", books: ["a", "b", "c"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 4, subName: "D", books: ["b", "c", "d"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 5, subName: "A", books: ["a", "b", "c"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 6, subName: "B", books: ["b", "c", "d"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 7, subName: "C", books: ["a", "b", "c"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]},
                { id: 8, subName: "D", books: ["b", "c", "d"], notes: ["1", "2", "3"], yt: ["!", "@", "#"]}
              ];

  const [modalContent, setModalContent] = useState(null);

  const showModal = (sub)=>{
    setModalContent(sub);
  }

  return(
    <section>
    <div className="flex justify-center flex-wrap relative">

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
