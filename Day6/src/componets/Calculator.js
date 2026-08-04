import { useState } from "react"

function Calculator(params)
{
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const [result,setResult]=useState(null);
function Addition(){
    const sum=parseFloat(num1)+parseFloat(num2);
    setResult(sum);
}
    return(
        <>
        Enter Num1: <input type="number" value={num1}  
                    onChange={(e)=>setNum1(e.target.value)}
                />   <br></br> <br></br>
                    
        Enter Num2: <input type="number" value={num2}  
                    onChange={(e)=>setNum2(e.target.value)}
                />   <br></br> <br></br>
        
         <button onClick={Addition}> Add </button>
         <h3>Results: {result} </h3>


        

        </>   
    )
}

export default Calculator