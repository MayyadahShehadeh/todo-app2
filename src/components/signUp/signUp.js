import React, { useContext } from 'react';
import { LoginContext } from '../auth/context';
import { When } from 'react-if';
import { Button, Form } from 'react-bootstrap';
export default function SignUp(props) {
  const ContextLogin = useContext(LoginContext);

  return (
    <>
      <br /> <br /> <br />
      <div style={{ marginRight: "300px", marginLeft: "300px" }}>
        <When condition={!ContextLogin.loggedIn}>
          <h1>SignUp Form</h1>
          <Form onSubmit={props.signUpubmit}>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder="username" name="username" onChange={props.handleChange} />
            </Form.Group>

            <br />
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label for="role">Role :</Form.Label>
              <Form.Control as="select" onClick={props.handleChange} name="role" id="role">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Control>
            </Form.Group>

            <br />
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password :</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={props.handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>

            <p>Already registered?{" "}
              <a onClick={() => props.flipFunction(false)} href="/#">
                Sign In
              </a>
            </p>
          </Form>
        </When>


      </div>


      {/* <h1>SignUp Form</h1>
      <form onSubmit={props.signUpubmit}>
      <input
      placeholder="UserName"
      name="username"
      type="text"
      onChange={props.handleChange}
        />
        
        <label for="role">Role:</label>
        <select onClick={props.handleChange} name="role" id="role">
        <option value="admin">Admin</option>
        <option value="user">User</option>
        </select>
        
        <input
        placeholder="password"
        name="password"
        type="password"
        onChange={props.handleChange}
        />
        <button type='submit'>Sign Up</button>
        
      </form> */}

    </>

  )
}
