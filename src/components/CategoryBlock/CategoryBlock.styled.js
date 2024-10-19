import styled from "styled-components";

export const SectionCategory = styled.section`
  position: relative;
  margin: 0 auto;
  width: 1100px;
  @media screen and (max-width: 1200px) {
    width: 700px;
    /* height: 350px; */
  }
  @media screen and (max-width: 767px) {
    width: 520px;
    /* height: 150px; */
  }
  @media screen and (max-width: 587px) {
    width: 320px;
    height: 150px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  pointer-events: none; /* Ensure the overlay doesn't block interactions */
`;

export const Img = styled.img`
  height: 568px;
  width: 1100px;
  @media screen and (max-width: 1200px) {
    width: 700px;
    height: 350px;
  }
  @media screen and (max-width: 767px) {
    width: 520px;
    height: 250px;
  }
  @media screen and (max-width: 587px) {
    width: 320px;
    height: 150px;
  }
`;

export const MainTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  color: white;
  font-size: 40px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    font-size: 26px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
