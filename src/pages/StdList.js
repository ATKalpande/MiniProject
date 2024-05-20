
import { Alert, Button, Container } from "react-bootstrap";


import { useState } from "react";
import { fetchData } from "../services/StdServices";

export function StudentList(){

  const[students,setStudent]=useState([]);
 

  
  const getStudent = async()=>{
    const response = await fetchData();
    console.log(response.data);
    setStudent(response.data)
    
  }

    return(
        <>
     
   <Container>
 
      <Button type="button" onClick={getStudent}  variant="primary">Fetch</Button>
        {/* <Button type="button" onClick={delStudent}  variant="primary">Fetch</Button>
 */}

   </Container>

   <Container>

   <table  border="1">
          <thead>
            <tr><th>ID</th>
            <th>Name</th>
         <th>Course</th>
         <th>Roll no</th></tr>
          </thead>
          <tbody>
           
          {
                                    students.map((s) => {
                                        return (
                                            <tr>
                                                <td>{s.id}</td>
                                                <td>{s.name}</td>
                                                <td>{s.subject}</td>
                                                <td>{s.rollno}</td>
                                                <td>
                                                   
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

            
          </tbody>
        </table>
   </Container>
           
        
        </>

        
     
    )
}