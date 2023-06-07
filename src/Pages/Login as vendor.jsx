import React, { useState,useEffect } from 'react'
import './Regpage.css'
import bgImg from '../images/222.jpg';
import axios from "axios"
function Register() {
    const[data,setData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        serviceType:'',
        password:'',
        confrimPassword:'' ,
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
        serviceType:data.serviceType,
        password:data.password,
        confirmPassword:data.confirmPassword
        }
        axios.post('http://localhost:8080/vendor_registration',userData).then(response =>{
           console.log(response)
           const val = response.status;

console.log(val);
if(val === 200){

window.location.replace("http://localhost:3000/Login");


}
}).catch((error,response)=>{
  console.log(error)

  if( error.response .status=== 401)
  {
      document.getElementById('result').innerHTML="some values are not entered"
  }
  if(error.response.status===303)
  {
    document.getElementById('result').innerHTML="email id already exist"
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
      const[values1,setValues1]=useState([
      ]);
      const  convert=( event)=>
      {
        //  axios.get("http://localhost:8080/service_type")
        //  .then((data)=>data.json())
        //   .then((values1)=>setValues1(values1))
        var select=document.getElementById('select number')
        for( var i=0;i<values1.service_type.length;i++)
        {
           let opt= values1.service_type[i];
        let  el=document.createElement("option")
        el.textContent=opt;
        el.value=opt;
        if( document.getElementById("select number").length<9){
        select.appendChild(el);
        }
        }
        console.log(values1.service_typeselectedIndex)
      }
    useEffect(()=>{
              fetch("http://localhost:8080/service_type")
              .then((data)=>data.json())
              .then((values1)=>setValues1(values1))
              .catch((error)=>console.log('cannot fetch'))
     },[]
     )
  return (
    <section class="app">
      <body class="b1">
        <div className="register">
       <div className="col-1">
            <h2>Registration </h2>
        <form id="myForm" className='flex flex-col' onSubmit={handleSubmit}>
        

        <input type="text" name='firstName' value={data.firstName} className='form-control rounded 0'onChange={handleChange} placeholder='First name'/>
        
        <input type="text" name='lastName' value={data.lastName} className='form-control rounded 0'onChange={handleChange} placeholder='Last name'/>

        <input type="text"   name='email' value={data.email}className='form-control rounded 0'onChange={handleChange} placeholder='Email'/>
         <select onClick={convert}  id='select number' class="s"  name='serviceType' value={data.serviceType}  onChange={handleChange}  >--select services---
               <option  > ---- select services ---</option>
            </select>
            
       
        <input type="file" id="f" placeholder='Vendor information'/>
        
        <input type="password" id='pass' name='password' value={data.password}className='form-control rounded 0'onChange={handleChange}
        
       placeholder='password'
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
        />
       
        <input type="password" id='confirm' name='confirmPassword' value={data.confirmPassword}className='form-control rounded 0'  onChange={handleChange}
        placeholder='Confirm password'
        />
        <div id='result'>
</div>
        <div>
    <label>
      <input id="f" type="checkbox" /> I Agree Terms & Conditions
    </label>
   
        <br></br>
<button class="gb" type='submit' id='submit'  value='submit'>Register</button>
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
  
export default Register;