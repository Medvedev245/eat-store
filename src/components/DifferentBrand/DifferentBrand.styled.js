import styled from "styled-components";

export const DifferentSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 0;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 767px) {
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: var(--iq-brand-text);

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 767px) {
    /* font-size: 20px; */
  }
`;
