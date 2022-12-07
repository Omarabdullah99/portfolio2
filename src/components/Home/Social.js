import React from 'react';
import { FaFacebook,FaInstagram,FaGithub } from "react-icons/fa";

const Social = () => {
    return (
        <div className='home_social'>

        <a href="https://www.facebook.com/omarabdullah.omar.37">
        <i className='home_social-icon'><FaFacebook></FaFacebook></i>
        </a>

        <a href="https://github.com/Omarabdullah99">
        <i className='home_social-icon'><FaGithub></FaGithub></i>
        </a>

        <a href="https://www.instagram.com/omar_abdullah303/">
        <i className='home_social-icon'><FaInstagram></FaInstagram></i>
        </a>

        
            
        </div>
    );
};

export default Social;