import styled from "styled-components";

export const SectionNewRecepies = styled.section`
  padding: 50px 30px;

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
    padding: 0 15px;
  }
`;

export const RecipeWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 1000px) {
    width: 600px;
  }
`;

export const TextWrap = styled.h2`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 35px;
  color: var(--iq-brand-text);

  @media screen and (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;
