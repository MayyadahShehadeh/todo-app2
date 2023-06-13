import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProvider from "./components/auth/context.js";
import './App.css';
import RenderAll from './components/renderAll.js';


function App() {
  return (

    <div>
      <LoginProvider>

        <RenderAll />
     
      </LoginProvider>
    </div>
  );
}

export default App;