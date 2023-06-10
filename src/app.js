import React from 'react';
import './app.css'
import ToDo from './components/todo/todo.js';
import Login from './components/auth/login';
export default class App extends React.Component {
  render() {
    return (
      <>
        <Login />

        <ToDo />

      </>
    );
  }
}
