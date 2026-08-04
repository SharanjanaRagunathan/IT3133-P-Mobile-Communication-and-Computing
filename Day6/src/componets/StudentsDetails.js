import React, { useState } from 'react';

import Student from "./Student"
function StudentsDetails(params){
     const [greet,setGreet] = useState("Hello React");
     const [count,setCount] = useState(0)
     const [color,setColor]=useState("coral")

     const students=params.studata
    return(
        <div >  
             <h1>{greet}</h1>
             <h2>{count} </h2>
             <button onClick={()=>{setGreet("Hello Students! ")}}> Change Heading</button>

                <table  border={1} cellSpacing={0} >
                    <tr>
                         <td>ID </td>
                         <td>Name</td>
                         <td>Course </td>
                    </tr>
                   {
                    students.map(s=>
                        // <Student id={s.id} name={s.name} course={s.course}  />
                        <Student detail = {s} />
                    )
                   }

                </table>
             </div>
    )
}

export default StudentsDetails;

