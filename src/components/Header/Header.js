import React from "react";
import { AiTwotoneHome,AiFillDatabase,AiOutlineClose,AiOutlineBars} from "react-icons/ai";
import { CgProfile} from "react-icons/cg";
import { GrServices} from "react-icons/gr";
import { BsReverseLayoutTextWindowReverse} from "react-icons/bs";
import { GrContactInfo} from "react-icons/gr";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Omar
        </a>

        <div className="nav_menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="" className="nav_link">
                <i className="nav_icon"><AiTwotoneHome></AiTwotoneHome> </i>Home
              </a>
            </li>

            <li className="nav_item">
            <a href="" className="nav_link">
              <i className="nav_icon"><CgProfile></CgProfile></i>About
            </a>
          </li>

          <li className="nav_item">
            <a href="" className="nav_link">
              <i className="nav_icon"><AiFillDatabase></AiFillDatabase></i>Skill
            </a>
          </li>

          <li className="nav_item">
            <a href="" className="nav_link">
              <i className="nav_icon"><GrServices></GrServices></i>Services
            </a>
          </li>

          <li className="nav_item">
            <a href="" className="nav_link">
              <i className="nav_icon"><BsReverseLayoutTextWindowReverse></BsReverseLayoutTextWindowReverse></i>Portfolio
            </a>
          </li>


          <li className="nav_item">
            <a href="" className="nav_link">
              <i className="nav_icon"><GrContactInfo></GrContactInfo></i>Contact
            </a>
          </li>

            


         
          </ul>
          <i className="nav_close"><AiOutlineClose></AiOutlineClose> </i>
        </div>
        <div className="nav_toggle">
        <i><AiOutlineBars></AiOutlineBars></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
