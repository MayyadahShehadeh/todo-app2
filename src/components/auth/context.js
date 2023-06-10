import React , {useState,useEffect} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import base64 from 'base-64';

const testUsers = {
  admin: { password: 'password', name: 'Administrator', role: 'admin', capabilities: ['create', 'read', 'update', 'delete'] },
  editor: { password: 'password', name: 'Editor', role: 'editor', capabilities: ['read', 'update'] },
  writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['create'] },
};

export const LoginContext  = React.createContext();

export default function LoginProvider(props) {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});


  const can = (capability) => {
    // optional chaining 
    return user?.actions?.includes(capability);
  }


  // Basic encoded(username:password) >> Basic eW=hdtgsjs
  const login = async (username, password) => {
    // localhost:3030/signin
    const response = await superagent.post(`http//:localhost:3000/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
    console.log('inside login >> response', response);//userInfo + token
    ValidateMyUser(response.body)
  }


  const ValidateMyUser = (data) => {
    if (data) {
      const validUser = jwt.decode(data.token);
      if (validUser) {
        setLoginstate(true, data);
        cookie.save('userData', data);
      } else {
        setLoginstate(false, {})
      }
    } else {
      setLoginstate(false, {})
    }


    const setLoginstate = (isLogged, userData) => {
      setLoggedIn(isLogged);
      setUser(userData);
    }


    const logout = () => {
      setLoggedIn(false);
      setUser({});
      cookie.remove('userData');
    }


    // ---- to take user data from cookies even when refresh the page ----
    useEffect(() => {
      const myUserInfo = cookie.load('userData');
      ValidateMyUser(myUserInfo);
    }, [])


    const allStates = {
      loggedIn: loggedIn,
      user: user,
      login: login,
      logout: logout,
      can: can
    }


    return (
        <LoginContext.Provider value={allStates}>
          {props.children}
        </LoginContext.Provider>
  
    )
  }
  }


