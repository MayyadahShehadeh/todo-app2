import React, { useContext, useState } from 'react';
import { LoginContext } from './context';
import SignUp from '../signUp/signUp';
import Signin from '../signIn/signin';



export default function Login() {
  const ContextLogin = useContext(LoginContext);

  let [userInputs, setIuserInputs] = useState({})
  const [flip, setFlip] = useState(false);


  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setIuserInputs((prevalue) => {
      // console.log('prevalue', prevalue);
      return {
        ...prevalue,   // Spread Operator              
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    ContextLogin.login(userInputs.username, userInputs.password);
  };
  const signUpubmit = (e) => {
    e.preventDefault();
    ContextLogin.signUp(userInputs.username, userInputs.password, userInputs.role);
  };

  function flipFunction() {
    setIuserInputs({});
    setFlip(true);
  }
  function restflipFunction() {
    setIuserInputs({});
    setFlip(false);
  }

  return (
    <>
     {flip === false ? (      
      
      <SignUp
      signUpubmit={signUpubmit}
      handleChange={handleChange}
      flipFunction={flipFunction}
      />

      ) :  (
      <Signin
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        restflipFunction={restflipFunction}
      />
      )}
    </>
  )
}
