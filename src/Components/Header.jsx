import React from "react";
import { BrowserRouter } from "react-router-dom";
import Icon from "../assets/Icon.png";
import * as S from "../Styles/Styled-Header";

const Header = () => {
  return (
    <BrowserRouter>
      <S.Header>
        <S.Img2 src={Icon} alt="" />
        <S.Legacy>Hogwarts Legacy</S.Legacy>
        <nav>
          <S.Nav>
            <S.Hover>Inicio </S.Hover>
            <S.Hover>
              <a style={{textDecoration:`none`}} href="https://www.livrobingo.com.br/harry-potter">Historia</a>
            </S.Hover>
            <S.Hover><a href="https://segredosdomundo.r7.com/casas-de-hogwarts/">Casas</a></S.Hover>
          </S.Nav>
        </nav>
      </S.Header>
   
    </BrowserRouter>
  );
};

export default Header;
