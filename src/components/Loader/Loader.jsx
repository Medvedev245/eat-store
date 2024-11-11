import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoaderComponent = () => {
  return (
    <div className="loader-container">
      <ClipLoader
        size={100} // размер загрузчика
        color="#123abc" // цвет загрузчика
        loading={true} // контролирует отображение загрузчика
        cssOverride={{ margin: "0 auto", display: "block" }} // переопределение стилей
        speedMultiplier={1.5} // скорость анимации
      />
    </div>
  );
};

export default LoaderComponent;
