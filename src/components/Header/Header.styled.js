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

  /* @media screen and (min-width: 767px) {
 
  } */
`;

export const TitleSpan = styled.span`
  display: flex;
  gap: 6px;
  font-family: Clash Display;
  font-size: 24px;
  font-weight: 500;
`;

export const NavBar = styled.nav`
  /* display: flex; */
`;

export const LinksBlock = styled.div`
  display: flex;
  gap: 45px;
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
`;

export const IconsBlock = styled.div`
  display: flex;
  gap: 16px;
`;

export const Img = styled.img`
  /* width: 16px;
  height: 16px; */
`;

export const ImgLogo = styled.img`
  width: 30px;
  height: 30px;
`;
