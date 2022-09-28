import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
export const nav = styled.ul`
  width: 50vw;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  font-size: 26px;
  list-style: none;
  margin-top: 2vw;

  left: 39vw;
`;

export const img2 = styled.img`
  width: 8%;
  margin-left: 5vh;
`;
export const Hover = styled.li`
  text-decoration: none;
  width: 22vw;
  a:hover{
    transform: scale(1);
    transition: ease-in-out 0.5s;
    width: 27vw;
    color: green;
    
  }
 
`;


