import React from 'react';
// import logo from './logo.svg';
import './App.css';
import User from "./components/User";
import NavBar from "./components/NavBar";
import Result from "./components/Result";


function App() {
  const istru= true;
  return (
    <div className="container">
      {/* <NavBar title="User App"/> */}
      <Result/>
      {/* <User isim="Şenol" departman="IT" unvan="Kıdemli"/> */}
    </div>
  );
}

export default App;
