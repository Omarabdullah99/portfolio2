import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Skill from './components/Skill/Skill';
import RecentWork from './components/RecentWork/RecentWork';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
    <Header></Header>
    <div className="main">
    <Home></Home>
    <About></About>
    <Skill></Skill>
    <RecentWork></RecentWork>
    <Contact></Contact>
    </div>
    </div>
  );
};

export default App;
