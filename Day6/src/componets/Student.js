 
function Students(params){
    const students= params.data
    return(
            <tr>
                    {/* <td>params.id</td>
                    <td>params.name</td>
                    <td>params.course</td> */}
                <td> { params.detail.id }</td>
                <td> { params.detail.name }</td>
                <td> { params.detail.course }</td>

            </tr>
    )
}

export default Students;