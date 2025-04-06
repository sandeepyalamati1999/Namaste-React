
import { use } from "react";
import {Header_Logo} from "../utils.js/constants.js";


const Header = () => {
    return (
      <div className="Header">
        <div className="logo-container">
          <img
            src={Header_Logo}
            alt="logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;


