import { useState } from 'react';
import FormHeader from './FormHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialMedia from './SocialMedia';
import './FormContainer.scss';

const SignUP = ({setAuthenticationWay}) => {
    const [inputData, setInputData] = useState({email:'', password: ''});
    const [isValid, setIsValid] = useState();
    const [validatorTextbox, setValidatorTextbox] = useState(false);

   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
   const emailIcon = <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>;
   const passwrodIcon = <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>;



   const emailHandler = (event) => {
       setInputData( function() {
         return { ...inputData,
           email:event.target.value,    
       }    
       } )
   }


   const passwordHandler = (event) => {
    setInputData( function() {
       if(inputData.password.length<2){
           setValidatorTextbox(() => false);
       }
       console.log(inputData.password,inputData.password.length)
       return { ...inputData,
           password:event.target.value,    
       } } )
       
       setValidatorTextbox(() => true);
       validatePassword(inputData.password);      

   }

   const validatePassword = (password) => {
       if(passwordRegex.test(password)){
           setIsValid(() => true);
       }
       else {
           setIsValid(() => false);
       }
     };


   // Form Submit Handler
   const submitHandler = (event) => {
       event.preventDefault();
       setInputData(() => {
           return ({email:'',password: ''})
       })
       console.log(inputData);
   }


    return (
        <div className="form-container">
            <FormHeader/>
            
            <form action="" className='form' onSubmit={submitHandler}>
                <div className="form-input">
                    <span className="form-input__icon">{emailIcon}</span>
                    <input type='email' placeholder='Email' value={inputData.email} onChange={emailHandler}/>
                </div>
                <div className="form-input">
                    <span className="form-input__icon">{passwrodIcon}</span>
                    <input type='password' placeholder='Password' value={inputData.password} onChange={passwordHandler}/>
                </div>
                {
                    validatorTextbox === true  ? <span className={isValid ? 'input-validation-message valid':'input-validation-message' } >{ isValid ? 'Password is valid':'Password is not valid'}</span>
                                                : ''
                }
                <div className="button-container">
                    <button className='common-button' type='submit' >Sign Up</button>
                    <SocialMedia></SocialMedia>
                    <span className='button-container__btn-description'>If you have an account?
                        <button className='text-button-colored' onClick={() => setAuthenticationWay("SignIn")}>Sign In here</button>
                    </span>

                    
                </div>
            </form>

        </div>
    );



}

export default SignUP;
