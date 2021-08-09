import React, {useState} from "react"


const ModalBox = (props)=> {


const [contentType, setContentType] = useState(0);


const changeContent = (e) => {
    setContentType(e);
  }


  return(
    <div className="h-auto w-1/2 fixed right-0 left-0 top-10 mx-auto shadow-2xl bg-white">
       <div className="p-4">
         <div className="flex justify-between">
           <div>
              <button className={"p-2 m-2 shadow " + (contentType === 0 ? "bg-blue-500 text-white" : "bg-white")} onClick={()=>changeContent(0)}>Books</button>
              <button className={"p-2 m-2 shadow " + (contentType === 1 ? "bg-blue-500 text-white" : "bg-white")} onClick={() =>changeContent(1)}>Notes</button>
              <button className={"p-2 m-2 shadow " + (contentType === 2 ? "bg-blue-500 text-white" : "bg-white")} onClick={() =>changeContent(2)}>YT Channel</button>
           </div>
           <div className="p-2 m-2 cursor-pointer" onClick={()=>props.call(null)}>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
             </svg>
           </div>
         </div>
         <div className="p-2">
          {contentType === 0?
            
              props.modalContent.books.map((book) => {
                return <p key={book}>{book}</p>
              })

          :
          
            (contentType === 1?
              
              props.modalContent.notes.map((note) => {
                return <p key={note}>{note}</p>
              })
              
              : 
              
              props.modalContent.yt.map((yt_link) => {
                return <p key={yt_link}>{yt_link}</p>
              })
              
              )

          }

         </div>
       </div>
     </div>
  )
}

export default ModalBox;
