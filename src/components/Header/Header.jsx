import React, { useState } from "react";
import {
  ComponentHeader,
  LinksBlock,
  ListBlock,
  Img,
  IconsBlock,
  NavBar,
  Item,
  LinkItem,
  TitleSpan,
  ImgLogo,
  BtnBurger,
  Btns,
} from "./Header.styled";
import BlurBackground from "../BlurBackground/BlurBackground";

import searchComponent from "../../Files/icons/search.png";
import Buscet from "../../Files/icons/busket.png";
import MyIcone from "../../Files/icons/MyIcone.png";
import Burger from "../../Files/icons/Burger.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <ComponentHeader>
      <div>
        <LinkItem to="/">
          <TitleSpan>
            Mamine
            <ImgLogo src={MyIcone} alt="MyIcone" />
            Recepty
          </TitleSpan>
        </LinkItem>
      </div>
      <LinksBlock>
        <NavBar isOpen={isOpen}>
          <ListBlock>
            <Item>
              <LinkItem to="/about-us" onClick={closeMenu}>
                About us
              </LinkItem>
            </Item>
            <Item>
              <LinkItem to="/contact" onClick={closeMenu}>
                Contact
              </LinkItem>
            </Item>
            <Item>
              <LinkItem to="/blog" onClick={closeMenu}>
                Blog
              </LinkItem>
            </Item>
          </ListBlock>
        </NavBar>
        <IconsBlock>
          <Btns>
            <Img src={Buscet} alt="Buscet" />
          </Btns>
          <Btns>
            <Img src={searchComponent} alt="Search" />
          </Btns>
          <BtnBurger onClick={toggleMenu}>
            <Img src={Burger} alt="Menu" />
          </BtnBurger>
        </IconsBlock>
      </LinksBlock>
      {isOpen && <BlurBackground onClick={toggleMenu} />}
    </ComponentHeader>
  );
};

export default Header;
