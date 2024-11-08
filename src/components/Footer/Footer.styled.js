import styled from "styled-components";

export const ComponentFooter = styled.footer`
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: var(--iq-Footr-BG);
  color: var(--iq-Footr-text);
  @media screen and (min-width: 767px) {
  }
`;

export const WrapLogo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapAdress = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
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
