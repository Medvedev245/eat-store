import { Link } from "react-router-dom";
import styled from "styled-components";

export const ImgRecipe = styled.img`
  height: 200px;
  border-radius: 10px;
  margin-bottom: 15px;
`;
export const OneItem = styled(Link)`
  width: 195px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  background-color: var(--iq-Card-BG);
  border-radius: 10px;
  justify-content: space-between;
  &:hover {
    background-color: var(--iq-Card-BG);
    transform: scale(1.05); // легкое увеличение
    transition: transform 0.3s ease, filter 0.3s ease;
    & ${ImgRecipe} {
      filter: brightness(0.8); // уменьшение яркости
      /* transition: transform 0.3s ease, filter 0.3s ease; */
    }
  }
`;

export const SpanRecipe = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--iq-nameFood-text);
`;

export const TextRecipe = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
  color: var(--iq-brand-text);
`;

export const RaithWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const Wrap = styled.div`
  padding: 0 10px 10px 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ImgTytle = styled.img`
  width: 14px;
  height: 14px;
`;

export const RaithSpan = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-bottom: 8px;
`;

export const WrapDescr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapElements = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
`;

export const SpanTime = styled.span`
  font-size: 15px;
  color: var(--iq-brand-text);
`;
