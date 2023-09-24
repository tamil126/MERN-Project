import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export function UserView() {
    let{id}=useParams()
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:3662/users")
    .then(data=>data.json())
    .then(res=>setUsers(res))
    
      })
      const delt=(id)=>{
        var key={id:id}
        axios.post("http://localhost:3662/delete/:id"+id,key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("Data are not deleted")
            }
            else if(res.data.status==="success"){
                alert("Data are deleted")
            }
        })
    }

  return (
    <>
    <div>
      <h1 className="text-center bg-info text-light">Admin View - All Users</h1>
      <table className="table table-striped">
        <thead>
          <tr className="bg-danger">
            <th>ID</th>
            <th>Roll</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Username</th>
            <th>Block_user</th>
            <th>Promote_user</th>
          </tr>
        </thead>
        <tbody>
          {
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.roll}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td><button className="btn btn-danger" onClick={()=>{delt(user.id)}}>delete</button></td>
              <td><Link to ={`/update/${user.id}`}className="btn btn-primary" >Promote</Link> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
