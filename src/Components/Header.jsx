import React from "react";
import { BrowserRouter, Routes, Route, link } from "react-router-dom";
import Main from "./Main";
import Icon from "../assets/Icon.png";
import { GlobalStyles } from "../Styles/Globalstyled";

const Header = () => {
  return (  
    <BrowserRouter>
      <div>
      <GlobalStyles/>
        <img src={Icon} alt="" />
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Historia</li>
            <li>Casas</li>
          </ul>
        </nav>
      </div>
      <Main />
    </BrowserRouter>
  );
};

export default Header;
