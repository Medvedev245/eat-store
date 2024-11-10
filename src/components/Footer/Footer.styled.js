import { Link } from "react-router-dom";
import styled from "styled-components";

export const ComponentFooter = styled.footer`
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--iq-Footr-BG);
  color: var(--iq-Footr-text);
  padding: 50px 80px 0 50px;
  @media screen and (max-width: 767px) {
    padding: 25px 0 0 0px;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const WrapLogo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapAddress = styled.address`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 24px;
  margin-top: 15px;
`;

export const WrapLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const MainWrapLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;

export const ImageLink = styled(Link)`
  display: inline-block; /* Это необходимо для применения стилей фона */
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    border-radius: 5px;
    background-color: var(--iq-header-text);
    /* color: blue; */
  }
`;

export const Copirith = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-around;
  border-top: 1px solid var(--iq-Footr-border);
`;
