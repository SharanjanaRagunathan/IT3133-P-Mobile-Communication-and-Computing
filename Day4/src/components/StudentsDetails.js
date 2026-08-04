import Student from "./Student";
function StudentsDetails(params){
    const students=params.studata
    
    return(
        
            <table boarder={1} cellspacing={0}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>course</th>
                </tr>
                {
                    students.map(s=>{
                        <Student id={s.id} name={s.name} course={s.course}/>
                    })
                }

                

            </table>
        
    )
}
export default StudentsDetails;