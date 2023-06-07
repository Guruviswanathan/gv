import React, { useState,useEffect } from 'react'

import axios from "axios"
function Register() {
    const[data,setData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confrimpassword:'' ,
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
        password:data.password,
        confirmpassword:data.confirmpassword
        }
        const password=document.getElementById("pass").value
        const conpassword=document.getElementById("confirm").value
        console.log(password)
        console.log(conpassword)
        const result=document.getElementById("result")
        if(password!==conpassword)
        {
          result.innerHTML("password must be same")
        }
        axios.post('http://localhost:8080/vendor_registration',userData)
          .then(Response=>console.log())
        //.catch(err=>console.log(err));
        // console.log(values);
      }
      const[values1,setValues1]=useState([]);
      // const select=document.querySelector('select')
      // select.addEventListener()
      //select.appendChild(el);
      const  convert= event =>
      {
        axios.get("http://localhost:8080/service_type")
        // .then((data)=>data.json())
        // .then((values1)=>setValues1(values1)
       
        document.getElementById('select number').innerHTML=0;
        
        var select=document.getElementById('select number')
      
      values1.service_type.forEach(val => {
          let el=document.createElement("option")
        el.textContent=val;
        el.value=val;
        select.appendChild(el);
      });
        
        }
        return (
    <body>
  <div>
        <form onSubmit={handleSubmit}>
            <h2>Vendor register</h2>
        <label htmlFor='firstName'><strong>firstName</strong></label>
        <input type="text" name='firstName' value={data.firstName} className='form-control rounded 0'onChange={handleChange}/>
        <label htmlFor='firstname'><strong>LastName</strong></label>
        <input type="text" name='lastName' value={data.lastName} className='form-control rounded 0'onChange={handleChange}/>
        <label htmlFor='firstname'><strong>email</strong></label>
        <input type="text"   name='email' value={data.email}className='form-control rounded 0'onChange={handleChange}/>
          
         <select onClick={convert}  id='select number' >--select services---
              
               <option  ></option>
             
            </select>
        <label htmlFor='fileupload'><strong>vendors information</strong></label>
        <input type="file"/>
        <label htmlFor='firstname'><strong>password</strong></label>
        <input type="text" id='pass' name='password' value={data.password}className='form-control rounded 0'onChange={handleChange}/>
        <label htmlFor='firstname'><strong>confrimpassword</strong></label>
        <input type="text" id='confirm' name='confirmpassword' value={data.confirmpassword}className='form-control rounded 0'onChange={handleChange}/>
        <div>
    <label>
      <input type="checkbox" /> Label text
    </label>
  </div>
        <br></br>
<button type='submit'>register</button>
<div id='result'>
</div>
        </form>
    </div>
    </body>
  )
  }
export default Register;