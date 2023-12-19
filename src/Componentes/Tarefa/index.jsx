import React from "react";
import { ContainerTarefa, InputTarefa } from "./style";
import iconeX from "./assets/icon-cross.svg";
import iconeCheck from "./assets/icon-check.svg";
export default function Tarefa({ item }) {
  return (
    <ContainerTarefa>
      <div>
        <label>
          <InputTarefa type="checkbox" icone={iconeCheck} />
          <span>{item}</span>
        </label>
      </div>
      <img src={iconeX} />
    </ContainerTarefa>
  );
}
