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
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 35px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    justify-content: space-between;
    gap: 30px;
    width: 620px;
  }
  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;

export const Element = styled.li`
  color: var(--iq-brand-text);
  width: 270px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 767px) {
    /* font-size: 20px; */
  }
`;

export const ElementSpan = styled.span`
  font-size: 20px;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Paragraf = styled.p`
  font-size: 16px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 24px;
  margin-bottom: 18px;
`;
