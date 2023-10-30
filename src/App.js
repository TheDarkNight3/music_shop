import React, { useState } from 'react';
import './App.scss';
import FormContainer from './components/Form/FormContainer';
import SignIn from './components//Form/SignIn.jsx';
import SignUP from './components/Form/SignUp';

const App = () => {

  const [authentication, setAuthentication] = useState('SignIn');

  const changeAuthentication = (way) => {
      if(way === "SignIn") {
        setAuthentication("SignIn")
      }
      else {
        setAuthentication("SignUp")
      }
  }

  return (
    <div className='mainApp' >
      {
        authentication === "SignIn" ? <SignIn setAuthenticationWay={changeAuthentication} />  : 
                                      <SignUP setAuthenticationWay={changeAuthentication}/>
      }
   
      
    </div>
  );
};

export default App;
