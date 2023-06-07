import React, { useState } from 'react'
import axios from 'axios';
import bgImg from '../images/021.jpg';
import './login.css'

export default function Login() {
const[data,setData]=useState({
    email:"",
    password:""
});
const handleChange=(e)=> {
    const value=e.target.value;
    setData({
        ...data,[e.target.name]:value})
};
const handleSubmit = (e)=>{
   e.preventDefault();
    var userData={
        email:data.email,
        password:data.password
    }
    axios.post("http://localhost:8080/user_login",userData).then(response => {
    const val = response.status;
    console.log(response.data.userType);
    console.log(val);
    if(val === 200){
    if( response.data.userType==='Consumer'){
    window.location.replace("http://localhost:3000/consumer");
    }
    else
    {
      window.location.replace("http://localhost:3000/Vendor");

    }
    }
}).catch((error,response) => {
    // catch any unexpected errors
    console.log(error);
    
      console.log( error.response.data.message)

      if(error.response.status===401)
      {
           document.getElementById('result').innerHTML="invalid emaild or password"
      }
    
})
        // var status = response.status;
// if(response.status===200){
//   swal({
//     title: "Good job!",
//     text: response.data.message,
//     icon: "success",
//   });
// }
// else{
//   console.log("hello error")
// }
// if(status===400){
//   swal({
//     title: "Good job!",
//     text: response.data.message,
//     icon: "success",
//   });
// }
}
  return (
    <section class="pp">
      <body class="b2">
        <div className="log">
            <div className="col-1">
                <h2>Login </h2>
                <span>Login and enjoy the service</span>

                <form id='fm' className='flex flex-col' onSubmit={handleSubmit}>
               
                <label for="inp" class="inp">
        
        <input onChange={handleChange} type="text"name="email" value={data.email} placeholder="&nbsp;" />
        <span class="label">Label</span>
  <span class="focus-bg"></span>
</label>
   
        
        <input onChange={handleChange} type="password"  name="password"   value={data.password} placeholder='Password'
        
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
        />
        <div id='result'>

        </div>
     
      <button class="bnn" type="submit">Login</button>
      <div class="bb-layer"></div>
  
  
   </form>

</div>
<div className="col-1">
    <img src={bgImg} alt="" />
</div>
</div>
</body>
</section>
)
}
