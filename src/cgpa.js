import React,{useState} from 'react'


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
    const [cred,setCred] = useState(0);
    const [calculated,setCalculated] = useState(false);
    const [mark,setMark] = useState(0);
     const [SG,setSG] = useState(0);
    var [studentlist,setList] = useState([]);
    const [CG,setCG] = useState(0);
    const [credprev,setPrevCred] = useState(0);
    const [credsum,setCredSum] = useState(0);
    const [newCG,setNewCG] = useState(0);
    const [flag,setFlag] = useState(false);
        const calcSG= () => {
        console.log(studentlist,"before");
        var sumMarks = 0;
        var sumCred = 0;
        var SGcalc = 0;
        if(studentlist.length<subjects.length)
        {
            alert("Enter grades of all subjects!");
        }
        else{
            for(var j =0; j<studentlist.length;j++)
            {    if(studentlist[j]=="")
                {
                    var check  = studentlist.slice(0,j).concat(studentlist.slice(j+1,));
                   // console.log("check",j,check);
                   studentlist = check;
                    //console.log("Student list now:",studentlist);
                }
            }
            
            console.log("After: ", studentlist);
            if(studentlist.length<subjects.length)
            {
                alert("Enter grades of all subjects!");
            }
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
          <div className="flex justify-between w-full">
              <div>
                <label className="">{item.name}</label>
              </div>
              <div className="block ml-auto mr-0">
                <input style={{width:"3rem"}} type="number" min="4" max="10" placeholder=' /10' className="outline border-2 ml-2" onMouseOut={(e) => setList([...studentlist,e.target.value])}></input>
              </div>

              <br />
              <br />
          </div>

      )})
    const refresh =()=>{
        setCG(0);
        setCalculated(false);
        setCred(0);
        setCredSum(0);
        setFlag(false);
        setList([]);
        setMark(0);
        setNewCG(0);
        setPrevCred(0);
        setSG(0);
        subjects.map((item,i)=>{document.getElementById(i).disabled = false;})

    }
    return (
        <section id="cgpa_calc">
        <div className="flex justify-center">
          <div className="mx-auto text-center text-4xl rounded bg-teal-accent-700 shadow-xl my-10 px-6 py-3 text-white">CGPA Calculator</div>
        </div>
        <div className="flex flex-col h-auto">
        <div className="flex justify-center">
          <button type="button" className ="px-6 py-3 shadow-md bg-teal-accent-700 hover:bg-teal-accent-700 text-white" onClick={refresh}>Reset</button>
        </div>
        <div className="flex justify-between items-start flex-wrap w-full mt-10">

        {/*Left Part*/}
        <div className="shadow-xl px-10 py-5 w-auto">
          <h4 className="font-semibold text-xl mb-5">Enter grades to calculate current sem SGPA</h4>
          <form action="">
                  {subjectList}
                  <div className="flex justify-center">
                      <button type = "button" className ="px-6 py-3 my-5 shadow-md bg-teal-accent-700 hover:bg-teal-500 text-white" onClick={calcSG}>Calculate SG</button>
                  </div>
          </form>
        </div>


        {/*Right Part*/}


        <div className="shadow-xl px-10 py-5 w-auto">
            <div className="">
                {calculated ? <h3 className="font-semibold my-3">Your SGPA for the current sem: {SG} </h3> : <p> </p>}
            </div>
            <div>
                    {!calculated?
                    <form action="">
                        <h4 className="font-semibold text-xl mb-5">Directly calculate CGPA</h4>

                        <div className="flex justify-between mb-4">
                            <label htmlFor="">SGPA for current sem: </label>
                            <input type="number" step="0.01" max="10" min="3" className="border-2 ml-2" onChange={(e) => setSG(e.target.value)}/>
                        </div>
                        <div className="flex justify-between mb-4">
                            <label htmlFor="">Credits completed in this sem: </label>
                            <input type="number" max="30"min="3" className="border-2 ml-2" onChange={(e) => setCredSum(e.target.value)}/>
                        </div>
                    </form>
                     :
                     null }
                </div>
            <div>
                {/* <h4>Calculate your CGPA till this sem: </h4> */}

                <form action="">
                    <div className="flex justify-between mb-4">
                        <label htmlFor="">CGPA till last sem: </label>
                        <input type="number" step="0.01" max="10" min="3" className="border-2 ml-2" onChange={(e) => setCG(e.target.value)}/>
                    </div>
                    <div className="flex justify-between mb-4">
                        <label htmlFor="">Credits completed till last sem: </label>
                        <input type="number" max="200" min="3" className="border-2 ml-2" onChange={(e) => setPrevCred(e.target.value)}/>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className ="px-6 py-3 my-5 shadow-md bg-teal-accent-700 hover:bg-teal-500 text-white" onClick={CGcalc}>Calculate CG</button>
                    </div>
                </form>

                <div >
                    {flag ? <h3 className="font-semibold">Your CGPA for the current sem: {newCG} </h3> : <p> </p>}
                </div>
            </div>
        </div>


        </div>


</div>

        </section>
    )
}

export default Cgpa
