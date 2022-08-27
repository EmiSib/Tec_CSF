import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    return (
      <h1>dfd</h1>
    );
  }

  const Respuesta = () =>{
    <h1>{inputs}</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: 
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <br></br>
      <label>Age: 
        <input 
          type="text" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
      <label>Mail: 
        <input 
          type="text" 
          name="mail" 
          value={inputs.mail || ""} 
          onChange={handleChange}
        />
        <br></br>
        <br></br>   
        </label>
        <input
        value = "Send"
         type="submit" />
         {Respuesta}
    </form>

    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);