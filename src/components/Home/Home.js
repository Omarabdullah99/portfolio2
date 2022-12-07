import React from "react";
import './Home.css'
import Data from "./Data";
import Social from "./Social";


const Home = () => {
  return (
    <section className="home section">
      <div className="home_container container grid">
        <div className="home_content grid">

        <Social></Social>

        <div className="home_img"></div>

        <Data></Data>
        
        </div>
      </div>
    </section>
  );
};

export default Home;
