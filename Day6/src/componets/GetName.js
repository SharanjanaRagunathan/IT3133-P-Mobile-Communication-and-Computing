import { useState } from "react"

function GetName(params){
    const [name,setName]=useState();
    const [count,setCount]=useState(0);
    function StringCount(str){
        let count=0;
        for(const s of str){
            count++;
            setCount(count)

        }
        // for(let index =0; index < str.length;index++ )
        // {
        //     count++;
        // }

        return count;
    }
    return(
        <>
        
        Your Name:    <input type="text" name="myname " value={name}
          onChange={(e)=>{setName(e.target.value); 

            setCount(StringCount(e.target.value))

          }}
           />
           
            <h1>{name} </h1>
            <h2> Character Count: {count}</h2>
            
        

        </>
    )
}

export default GetName