import React from "react";
import style from "./ErrorPage.module.scss";

export const ErrorPage: React.FC = () => {
  return (
    <main className={style.container}>
      <h2 className={`${style.titulo} animate__animated animate__bounceIn`}>
        Ops!!! Something went wrong...:\
      </h2>
      <div
        className={style.imagem}
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png)",
        }}
      ></div>
    </main>
  );
};
