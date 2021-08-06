import React,{useState} from 'react'
import './cgpa.css' 
{/* <link href="https://fonts.googleapis.com/css?family=Andada+Pro" rel="stylesheet"></link> */}
<link href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@600&display=swap" rel="stylesheet"></link>


function Cgpa() {
    const subjects = [
        {name : 'Control Engineering - Theory', credits: 3},
        {name : 'Control Engineering - Practical', credits: 1},
        {name : 'Embedded Systems - Theory', credits: 3},
        {name : 'Embedded Systems - Practical', credits: 1},
        {name : 'Analog Communication - Theory', credits: 4},
        {name: 'Analog Communication - Practical', credits: 1},
        {name: 'Measurement & Instrumentation - Theory', credits: 3},
        {name:'Measurement & Instrumentation - Practical', credits: 1},
        {name:'Wave Guides and Antennas', credits: 3},
        {name: 'CAO/CMOS/ESD/ALGO', credits: 3}
    ]
    // const subjects = [
    //     {name : 'NMPT MAL 205', credits: 4},
    //     {name : 'DSP ECL 304    ', credits: 3},
    //     {name : 'DSP ECP 304    ', credits: 1},
    //     {name : 'EMFT ECL 305   ', credits: 4},
    //     {name : 'DCMP ECL 203   ', credits: 3},
    //     {name: 'DCMP ECP 203    ', credits: 1},
    //     {name: 'EPDW ECP 307    ', credits: 1},
    //     {name:'ACD ECL 308  ', credits: 3},
    //     {name:'ACD ECP 308  ', credits: 1},
    //     {name: 'OC/HM   ', credits: 3}
    // ]
    const [cred,setCred] = useState(0);
    const [calculated,setCalculated] = useState(false);
    const [mark,setMark] = useState(0);
     const [SG,setSG] = useState(0);    
    const [studentlist,setList] = useState([]);
    const [CG,setCG] = useState(0);
    const [credprev,setPrevCred] = useState(0);
    const [credsum,setCredSum] = useState(0);
    const [newCG,setNewCG] = useState(0);
    const [flag,setFlag] = useState(false);

    const AppendList = (e) => {
        if(!Number.isInteger(Number(mark)))
        alert("Enter only integer values");
        else if(Number(mark)===0)
        {console.log("ERROR");
       
        alert("Field should not be empty");
         }
         else if(Number(mark)>10 || Number(mark)<0)
         {
             alert("Invalid Value entered!")
         }
         else
       { 
        studentlist.push(Number(mark));
        console.log(studentlist);
        document.getElementById(e.target.id).disabled = true;
        setMark(0);
       }
    }
   
    const calcSG= () => {
        var sumMarks = 0;
        var sumCred = 0;
        var SGcalc = 0;
        if(studentlist.length<9)
        {
            alert("Enter grades of all subjects!");
        }
        else{
            for( var i=0;i<studentlist.length;i++)
                {
                    var prod = studentlist[i] * subjects[i].credits;
                    sumMarks = sumMarks + prod;
                    sumCred += subjects[i].credits;
                }
                SGcalc = (sumMarks/sumCred).toFixed(2);
                setCredSum(sumCred);
                setSG(SGcalc);
                setCalculated(true);
                setList([]);
        }
        
    }
    const CGcalc = ()=> {
        if(CG===0 || credprev===0)
        {
            alert("Fill all required fields!");
        }
        else{
        var prod = CG*credprev;
        prod = prod + (Number(credsum)*Number(SG));
        prod = (prod/(Number(credsum)+Number(credprev))).toFixed(2);
        setNewCG(prod);
        setFlag(true);
        console.log(Number(SG),credsum);    
        }
    }
    let subjectList = subjects.length > 0 &&
        subjects.map((item, i) => {
        return (
          <div className="fields">
              <label className="leftform">{item.name}</label>
              <div className="rightform">
              <input style={{width:"3rem"}} type="number" max="10" placeholder='    /10' onChange={(e) => setMark(e.target.value)} onSubmit={AppendList}></input>
              <br />
              <button type="button" className="savebtn" id={i} onClick={AppendList}  >
                Save 
              </button>
          </div>
              <br />
              <br />
          </div>    
        
      )})
    
    return (
        
        <div className="form">
            <h1>CGPA Calculator</h1>
            
            <div className="left">
            
            <h4>Enter grades to calculate current sem SGPA</h4>
            <form action="">
                    {subjectList}
                    <button type = "button" className ="btn" onClick={calcSG}>Calculate SG</button>
            </form>
            
            </div>
            <div className="right">
                
                <div className="">
                    {calculated ? <h3>Your SGPA for the current sem: {SG} </h3> : <p> </p>}
                </div>
                <div>
                        {!calculated?
                        <form action="">
                            <h4>Directly calculate CGPA</h4>
                        <label htmlFor="">SGPA for current sem: </label>
                        <input type="number" step="0.01" max="10" min="3" onChange={(e) => setSG(e.target.value)}/>
                        <br /><br />
                        <label htmlFor="">Credits completed in this sem: </label>
                        
                        <input type="number" max="10" min="3" onChange={(e) => setCredSum(e.target.value)}/>
                        
                        </form>
                         :
                         <p></p> }
                    </div>
                <div>
                    {/* <h4>Calculate your CGPA till this sem: </h4> */}
                    
                    <form action="">
                        <br />
                        <label htmlFor="">CGPA till last sem: </label>
                        <input type="number" step="0.01" max="10" min="3" onChange={(e) => setCG(e.target.value)}/>
                        <br /><br />
                        <label htmlFor="">Credits completed till last sem: </label>
                        
                        <input type="number" max="10" min="3" onChange={(e) => setPrevCred(e.target.value)}/>
                        <br /><br />
                        <button type="button" className ="btn" onClick={CGcalc}>Calculate CG</button>
                    </form>
                   
                    <div className="">
                        {flag ? <h3>Your CGPA for the current sem: {newCG} </h3> : <p> </p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cgpa
