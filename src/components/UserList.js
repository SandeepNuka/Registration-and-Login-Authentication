import React, { useEffect ,useState} from 'react'
import axios from 'axios'


function UserList() {

  const[userlist,setuserlist]=useState([])

  useEffect(() => {
    axios.post('/api/user/getuser').then(
    res => {
        console.log(res);
        setuserlist(res.data)
    }
  ).catch(err => {
    console.log(err)
  })
    
  },[])
 
  const usersdata = userlist.map((obj) => {
    return <tr>
      <td>{obj.name}</td>
      <td>{obj.username}</td>
       <td>{ obj.password}</td>
    </tr>
  })
    return (
        <div>
            <h1>UserList</h1>
            
    <table className="table table-dark">
  <thead>
    <tr>
      <th >Name</th>
      <th >username</th>
      <th >Password</th>
      
    </tr>
          </thead>
          <thead>
          {usersdata}
          </thead>
          
    </table>
    </div>
            
    )

}

export default UserList