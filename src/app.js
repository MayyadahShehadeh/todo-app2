import React from 'react';
import './app.css'
import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <ToDo />
    );
  }
}
