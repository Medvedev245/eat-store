// import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionCategory = styled.section`
  width: 1200px;
  position: relative;
  margin: 0 auto;
  /* display: flex;
  justify-content: space-evenly; */
  /* height: 65px;
  width: 100vw; */
  /* background-color: #efeaff; */

  @media screen and (max-width: 767px) {
  }
`;

export const Overlay = styled.div`
  /* display: flex;
  justify-content: space-evenly; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 568px;
  background: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  pointer-events: none; /* Ensure the overlay doesn't block interactions */
`;

export const Img = styled.img`
  height: 568px;
  width: 1200px;
`;

export const MainTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
`;
