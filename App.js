import React,{useState }from 'react'
import './App.css';
import axios from 'axios'; 

const App = () => {
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  const {name,email,password,confirmpassword} = data;
  const changehandler = e => {
     setData({...data,[e.target.name]:e.target.value})
  }
  const submithandler = e => {
    e.preventDefault();
    axios.post('https://sandeepkumartrading-df646-default-rtdb.firebaseio.com/register.json',data).then(() => alert("Submitted Successfully"))
  }
  return (
    <div>
      <center>
        <form autoComplete='off' onSubmit={submithandler}>
        <input type='text' name='name' placeholder='Fullname' value={name} onChange={changehandler}/><br/>
        <input type='email' name='email' placeholder='Email' value={email} onChange={changehandler}/><br/>
        <input type='password' name='password' placeholder='Password' value={password} onChange={changehandler}/><br/>
        <input type='password' name='confirmpassword' placeholder='ConfirmPassword' value={confirmpassword} onChange={changehandler}/><br/>
        <input type='Submit' name='Submit'/><br/>
        </form>
      </center>
    </div>
  )
}
       

export default App