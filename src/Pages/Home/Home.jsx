import React from "react";
import CategoryBlock from "../../components/CategoryBlock/CategoryBlock";
import DifferentBrand from "../../components/DifferentBrand/DifferentBrand";
import { HomeSection } from "./Home.styled";

const Home = () => {
  //   const promise = new Promise((resolve, reject) => {
  //     fetch("https://dummyjson.com/recipes")
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         resolve(data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  //   promise
  //     .then((data) => {
  //       console.log(data.recipes);
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка:", error);
  //     });
  return (
    <HomeSection>
      <CategoryBlock />
      <DifferentBrand />
    </HomeSection>
  );
};

export default Home;
