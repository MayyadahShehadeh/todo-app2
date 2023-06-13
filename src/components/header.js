import React, { useContext } from 'react';
import { Button, Navbar, Alignment } from "@blueprintjs/core";
import { When } from 'react-if';
import { LoginContext } from './auth/context';


export default function Header() {
  const ContextLogin = useContext(LoginContext);

    return (
        <div>
            <Navbar style={{ position: 'fixed', top: '0' }}>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>To Do List</Navbar.Heading>
                    <Navbar.Divider />
                    <a href="/">
            <Button icon="home" text="Home"></Button>
          </a>
          <When condition={ContextLogin.loggedIn}>
                <button onClick={ContextLogin.logout}>Log Out</button>
            </When>
                </Navbar.Group>
            </Navbar>


        </div>
    )
}
