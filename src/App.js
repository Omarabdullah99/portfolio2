import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Skill from './components/Skill/Skill';

const App = () => {
  return (
    <div>
    <Header></Header>
    <div className="main">
    <Home></Home>
    <About></About>
    <Skill></Skill>
    </div>
    </div>
  );
};

export default App;
