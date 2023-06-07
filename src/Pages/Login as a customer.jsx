
import React, { useState } from 'react'
import './Regpage.css'
import bgImg from '../images/222.jpg';
import axios from 'axios'
function  Customer() {



  const[data,setData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    password:'',
  
})
const handleChange =(e) =>{
    const value=e.target.value;
    setData({
    ...data,[e.target.name]:value})
}
const handleSubmit=(event) =>{
    event.preventDefault( );
    var userData={
      firstName:data.firstName,
    lastName:data.lastName,
    email:data.email,
    phoneNumber:data.phoneNumber,
    password:data.password,
   
    }


    axios.post('http://localhost:8080/consumer_registration',userData).then(response =>{
      console.log(response)
      console.log('userData')

const val=response.status
      if(val===200)
      {
        window.location.replace("http://localhost:3000/Login");
      }
     }).catch((error,response)=>{

      if(error.response.status===401)
      {
        document.getElementById('result').innerHTML="some values are not entered"
      }
      if(error.response.status===303)
      {
        document.getElementById('result').innerHTML=error.response.data.message
        console.log(error.response.data.message)
      }
       

     })
     const form = document.getElementById('myForm');
const passwordField = document.getElementById('pass');
const confirmPasswordField = document.getElementById('confirm');
form.addEventListener('submit', function(event) {
event.preventDefault();
// Get the entered passwords
const password = passwordField.value;
const confirmPassword = confirmPasswordField.value;
// Check if passwords match
if (password === confirmPassword) {
// Passwords match, submit the form

} else {
// Passwords don't match, show an error message or perform some action
document.getElementById('result').innerHTML="password must be same"
}
});

  }

  return (
    <section class="app">
      <body class="b1">
        <div className="register">
       <div className="col-1">
            <h2>Registration </h2>
        <form id='myForm' class ='flex flex-col' onSubmit={handleSubmit}>
         
       <input type="text" name='firstName' value={data.firstName} className='form-control rounded 0'onChange={handleChange} placeholder='First Name'/>
       
        <input type="text" name='lastName' value={data.lastName} className='form-control rounded 0'onChange={handleChange} placeholder='Last Name'/>
     
        <input type="text"   name='email' value={data.email}className='form-control rounded 0'onChange={handleChange} placeholder='Email'/>


        <input type="text"   name='phoneNumber' value={data.phoneNumber}className='form-control rounded 0'onChange={handleChange} placeholder='Phone Number'/>



        <input type="password" id='pass' name='password' value={data.password}className='form-control rounded 0'onChange={handleChange} placeholder='Password'
        
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
        
        />
      
        <input type="password" id='confirm' name='confirmPassword' value={data.confirmPassword}className='form-control rounded 0'  onChange={handleChange} placeholder='Confrim Password' />
        <div id='result'>
</div>
        <div>
    <label>
      <input type="checkbox" /> Agree Terms & Condition
    </label>
  </div>
        <br></br>
<button type='submit' class="gb" id='submit'  value='submit'>Register</button>
<div id='result'>

</div>
        </form>
        
        </div>
        <div className="col-2">
    <img src={bgImg} alt="" />
</div>
        </div>
</body>
</section>
  )
}

export default Customer