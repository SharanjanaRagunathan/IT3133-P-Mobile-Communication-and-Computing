function Student(params){
    
    return(
        <>
        
            <tr>
                <td>{params.detail.id}</td>
                <td>{params.detail.name}</td>
                <td>{params.detail.course}</td>
            </tr>
        </>
    )
}
export default Student;
