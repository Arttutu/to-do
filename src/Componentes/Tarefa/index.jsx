import React from "react";
import { ContainerTarefa, InputTarefa } from "./style";

export default function Tarefa() {
  return (
    <ContainerTarefa>
      <InputTarefa type="checkbox" />
      <p>Aqui vai a sua tarefa</p>
    </ContainerTarefa>
  );
}
