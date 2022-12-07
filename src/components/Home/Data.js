import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";


const Data = () => {
    return (
        <div className='home_data'>
            <h1 className='home_title'>Omar Abdullah <i className='home_hand'><FaThumbsUp></FaThumbsUp></i></h1>
            <h3 className='home_subtitle'>Front-End Web Developer</h3>
            <p className='home_description'>Front-End-Developer with some running projects. Capable of continuous
            learning from senior developers. Experience in facilitating projects from
            concept to launch. Passionate about learning and development with a desire to
            apply skills on a large development team.</p>

            <a href="" className='button button--flex'>
            Say Hello
            <i className='buttonmessage'><BiMessageRounded></BiMessageRounded></i>

            </a>
        </div>
    );
};

export default Data;