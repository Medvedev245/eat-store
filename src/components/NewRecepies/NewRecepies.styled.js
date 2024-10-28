import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionNewRecepies = styled.section`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;

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
  font-weight: 400;
  margin-bottom: 35px;
  color: var(--iq-brand-text);

  @media screen and (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  width: 170px;
  height: 55px;
  margin: 0 auto;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  align-items: center;
  &:hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;
