import React from "react";
import style from "./index.module.css";

const Content = () => {
  return (
    <div className={style.content}>
      <div className={style.firstContent}>
        <div className={style.contentGradient}></div>
        <div>
          <h1>Primeiro conteúdo: Gradiente</h1>
          <p>Testando conteúdo de gradiente no css</p>
        </div>
      </div>
      <div className={style.secondContent}>
        <div className={style.shadownContent}>
          <h2>Testando shadow</h2>
          <h2>Testando shadow</h2>
          <h2>Testando shadow</h2>
          <h2>Testando shadow</h2>
          <h2 style={{ color: "white", textShadow: "2px 2px 4px red" }}>
            Testando shadow
          </h2>
          <h2 style={{ color: "white", textShadow: "2px 2px 4px red" }}>
            Testando shadow
          </h2>
          <h2 style={{ color: "white", textShadow: "2px 2px 4px red" }}>
            Testando shadow
          </h2>
        </div>
        <div>
          <h1>Segundo conteúdo: Text shadown</h1>
          <h3>Como usar:</h3>
          <p>
            <code>text-shadow(ou box-shadown, se for o caso de ser uma "caixa"/div): 2px 2px blue;</code>
          </p>
          <p>
            1º desloca para direita; 2º desloca para baixo; 3º (opcional)
            blur/opacidade;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
