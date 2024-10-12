import React from "react";
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
} from "./Header.styled";

import searchComponent from "../../Files/icons/search.png";
import Buscet from "../../Files/icons/busket.png";
import MyIcone from "../../Files/icons/MyIcone.png";

const Header = () => {
  return (
    <ComponentHeader>
      <div>
        <TitleSpan>
          Mamine
          <ImgLogo src={MyIcone} alt="MyIcone" />
          Recepty
        </TitleSpan>
      </div>
      <LinksBlock>
        <NavBar>
          <ListBlock>
            <Item>
              <LinkItem>About us</LinkItem>
            </Item>
            <Item>
              <LinkItem>Contact</LinkItem>
            </Item>
            <Item>
              <LinkItem>Blog</LinkItem>
            </Item>
          </ListBlock>
        </NavBar>
        <IconsBlock>
          <button>
            <Img src={searchComponent} alt="Search" />
          </button>
          <button>
            <Img src={Buscet} alt="Buscet" />
          </button>
        </IconsBlock>
      </LinksBlock>
    </ComponentHeader>
  );
};

export default Header;
