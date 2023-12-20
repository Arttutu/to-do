import React from "react";
import { ContainerTarefa, InputTarefa } from "./style";
import iconeX from "./assets/icon-cross.svg";
import iconeCheck from "./assets/icon-check.svg";

export default function Tarefa({ item, removerTarefa, index, tarefa }) {
  const RemoverTarefa = (index) => {
    const novaListaTarefas = tarefa.filter((_, i) => i !== index);
    removerTarefa(novaListaTarefas);
  };

  return (
    <ContainerTarefa>
      <div>
        <label>
          <InputTarefa type="checkbox" icone={iconeCheck} />
          <span>{item}</span>
        </label>
      </div>
      <img src={iconeX} alt="Ícone de Remoção" onClick={RemoverTarefa} />
    </ContainerTarefa>
  );
}
