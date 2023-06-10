import React, { useContext,useState } from 'react';
import {When} from 'react-if';

import { LoginContext } from './context.js';

export default function Login() {
  const contextLogin = useContext(LoginContext);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleChange = e => {
    setUsername({ [e.target.name]: e.target.value });
    setPassword({ [e.target.name]: e.target.value });

  };
  
  const handleSubmit = e => {
    e.preventDefault();
    contextLogin.login(username,password);
  };

  return (
    <>
    <When condition={contextLogin.loggedIn}>
      <button onClick={contextLogin.logout}>Log Out</button>
    </When>

    <When condition={!contextLogin.loggedIn}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="UserName"
          name="username"
          onChange={handleChange}
        />
        <input
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </When>
  </>
  )
}

