import React, { useContext } from 'react';
import { LoginContext } from './auth/context';
import { When } from 'react-if';
import ToDo from './todo/todo';
import SignFunctions from './auth/signFunctions';
import Header from './header';

export default function RenderAll() {

    const ContextLogin = useContext(LoginContext);

    return (
        <div>
         <Header />
         <br/>
         <br/>
         <br/> 
            <When condition={ContextLogin.loggedIn}>
                <ToDo />
            </When>


            <When condition={!ContextLogin.loggedIn}>
                <SignFunctions />
            </When>


        </div>
    )
}
