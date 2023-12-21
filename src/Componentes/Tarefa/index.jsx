import React from "react";
import { ContainerTarefa, InputTarefa } from "./style";
import iconeX from "./assets/icon-cross.svg";
import iconeCheck from "./assets/icon-check.svg";

export default function Tarefa({ item, index, removerTarefa }) {
  return (
    <ContainerTarefa>
      <div>
        <label>
          <InputTarefa type="checkbox" icone={iconeCheck} />
          <span>{item}</span>
        </label>
      </div>
      <button onClick={() => removerTarefa(index)}>
        <img src={iconeX} alt="Ícone de Remoção" />
      </button>
    </ContainerTarefa>
  );
}
