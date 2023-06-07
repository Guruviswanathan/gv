import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Pages/Home';

import ContactUs from './Pages/ContactUs';
import Login from './Pages/LogIn';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';



import Vendor from './Pages/Login as vendor';
import Consumer from './Pages/consumer';
import Customer from './Pages/Login as a customer'
import OTPBox from './Pages/OTP screen';






function App() {
  return (
    <Router>
   

       <Switch>
       <Route path='/otp' component={OTPBox}/>
       <Route path='/customer' component={Customer} />
       <Route path='/vendor' component={Vendor} /> 
       <Route path='/LogIn' component={Login} />

      <div> 
       <Navbar />
    
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/' exact component={Home}  />
      <Route path='/register' component={Vendor}/>
      <Route path='/consumer' component={Consumer}/>
     
      </div> 
     
  
        <Route path='/customer' component={Customer} />
      <Route path='/vendor' component={Vendor} />  *
      </Switch> 
    
     
    </Router>
  );
}

export default App
