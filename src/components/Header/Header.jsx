import React from "react";
import {
  ComponentHeader,
  LinksBlock,
  ListBlock,
  Img,
  IconsBlock,
  NavBar,
  Item,
} from "./Header.styled";
import { Link } from "react-router-dom";

import searchComponent from "../../Files/icons/search.png";
import Buscet from "../../Files/icons/busket.png";

const Header = () => {
  return (
    <ComponentHeader>
      <div>
        <span>MamineRecepty</span>
      </div>
      <LinksBlock>
        <NavBar>
          <ListBlock>
            <Item>
              <Link>About us</Link>
            </Item>
            <Item>
              <Link>Contact</Link>
            </Item>
            <Item>
              <Link>Blog</Link>
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
