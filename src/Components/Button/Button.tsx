import React from "react";
import { Btn } from "./styled";
import { IButton } from "../../@types/IButton";

export const Button = ({ icone, texto, onClick }: IButton) => {
  return (
    <Btn onClick={onClick}>
      <div>
        <img src={icone} alt="icone" />
        <p>{texto}</p>
      </div>
    </Btn>
  );
};
