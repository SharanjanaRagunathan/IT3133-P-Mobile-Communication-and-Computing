import {useState} from "react";
import Student from "./Student";

function StudentsDetails(params){
    const students=params.studata
    const[greet ,setGreet]=useState("Hello React")
    const[count,setCount]=useState(0)
    setGreet("Hello students")

    return(
        <>
            <h1>{greet}</h1>
            <button onClick={()=>{setGreet("Hello students")}}> Change Heading </button>
            <h2> {count} </h2>
            <button onClick={()=>{setCount(count+1)}}> Increase </button>
            <table boarder={1} cellspacing={0}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>course</th>
                </tr>
                {
                    students.map(s=>{
                        <Student id={s}/>
                    })
                }

                

            </table>
        </>
    )
}
export default StudentsDetails;