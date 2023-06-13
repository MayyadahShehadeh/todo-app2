import React, { useContext } from 'react';
import { LoginContext } from '../auth/context';
import { When } from 'react-if';
import { Button, Form } from 'react-bootstrap';

export default function Signin(props) {
    const ContextLogin = useContext(LoginContext);
    return (
        <>
            <br /> <br /> <br />
            <div style={{ marginRight: "300px", marginLeft: "300px" }}>
                <h1>Login Form</h1>

                <When condition={ContextLogin.loggedIn}>
                    <button onClick={ContextLogin.logout}>Log Out</button>
                </When>

                <When condition={!ContextLogin.loggedIn}>
                    <Form onSubmit={props.handleSubmit}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control placeholder="UserName"
                                name="username"
                                type="text"
                                onChange={props.handleChange} />
                        </Form.Group>

                        <br />

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password :</Form.Label>
                            <Form.Control placeholder="password"
                                name="password"
                                type="password"
                                onChange={props.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                        {console.log("logeed??", ContextLogin.loggedIn)}
                        {ContextLogin.loggedIn && <a href="/">Home</a>
                        }

                        <p className="message">
                            Don't have an account ?{" "}
                            <a onClick={() => props.restflipFunction(true)} href="#">
                                Sign up
                            </a>
                        </p>



                    </Form>
                </When>

            </div>
        </>
    )
}
