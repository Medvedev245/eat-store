import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionNewRecepies = styled.section`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--iq-header-bottom);

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 767px) {
    padding: 30px 15px;
  }
`;

export const RecipeWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 35px;

  @media screen and (max-width: 1000px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 35px;
    width: 320px;
  }
`;

export const TextWrap = styled.h2`
  font-size: 32px;
  /* font-weight: 400; */
  margin-bottom: 35px;
  color: var(--iq-brand-text);

  @media screen and (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const ButtonLink = styled(Link)`
  text-align: center;
  display: inline-block;
  width: 170px;
  height: 55px;
  margin: 0 auto;
  padding: 16px 37px;
  border: 2px solid var(--iq-header-title);
  color: var(--iq-brand-text);
  text-decoration: none;
  border-radius: 5px;
  align-items: center;
  &:hover,
  &:focus {
    background-color: var(--iq-header-title);
    transition: 0.5s;
  }

  @media screen and (max-width: 767px) {
    width: 250px;
    font-size: 20px;
    margin-bottom: 15px;
    padding: 15px 25px;
  }
`;
