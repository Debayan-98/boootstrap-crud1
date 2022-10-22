import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../Services/Api'
export const AllUser = () => {
    const[users,setUsers]=useState([])

    const getUserDetails=async()=>{
        let response=await getUsers ()
        setUsers(response.data)
    }


    useEffect(()=>{ getUserDetails()
    },[])

const deleteUserData=async id=>{
  await deleteUserData(id)
  getUserDetails()
}
    
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th >ID</th>
      <th >NAME</th>
      <th >EMAIL</th>
      <th >PHONE</th>
      <th >PASSWORD</th>
      <th >CITY</th>
      <th >DOB</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user=>(

   
    <tr key={user.id}>
     
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.password}</td>
      <td>{user.city}</td>
      <td>{users.dob}</td>
  <td>

  <Link to={`/edit/${user.id}`}><button className="btn btn">Edit</button></Link>
  <button className="btn btn"onClick={()=>deleteUserData(user.id)}>Delete</button>
  </td>


    </tr>
     ))}
  </tbody>
</table>
    </div>
  )
}
