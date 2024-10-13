import { Link } from "react-router-dom";
import styled from "styled-components";

export const ComponentHeader = styled.header`
  background-color: #efeaff;
  height: 70px;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  @media screen and (min-width: 767px) {
  }
`;

export const TitleSpan = styled.span`
  display: flex;
  gap: 6px;
  font-family: Clash Display;
  font-size: 24px;
  font-weight: 500;
`;

export const NavBar = styled.nav`
  display: flex;
  transition: transform 0.1s;
  @media screen and (max-width: 768px) {
    z-index: 10;
    position: absolute;
    width: 50%;
    height: 100vh;
    top: 0;
    right: 0;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    position: ${(props) => (props.isOpen ? "absolute" : "relative")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    justify-content: flex-start;
    background-color: #203f43;
    flex-direction: column;
    gap: 60px;
    padding-top: 90px;
  }
`;

export const LinksBlock = styled.div`
  display: flex;
  gap: 45px;
  @media screen and (max-width: 768px) {
    height: 25px;
  }
`;

export const ListBlock = styled.ul`
  display: flex;
  gap: 35px;
`;

export const Item = styled.li``;
export const LinkItem = styled(Link)`
  font-family: Satoshi;
  text-decoration: none;
  color: var(--iq-header-text);
  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;

export const IconsBlock = styled.div`
  display: flex;
  gap: 16px;
`;

export const Img = styled.img`
  width: 15px;
  height: 15px;
`;

export const ImgLogo = styled.img`
  width: 30px;
  height: 30px;
`;

export const BtnBurger = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  display: none;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: #bec4e6;
  }
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

export const Btns = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    background-color: #bec4e6;
  }
`;
