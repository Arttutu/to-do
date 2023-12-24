import React, { useState } from "react"
import { ContainerTarefa, InputTarefa } from "./style"
import iconeX from "./assets/icon-cross.svg"

import { useTarefaContex } from "../Commun/Context/tarefaContext"

export default function Tarefa({ item, index }) {
  const { RemoverTarefa, marcarCompleta } = useTarefaContex()

  return (
    <ContainerTarefa>
      <div>
        <label>
          <InputTarefa
            type="checkbox"
            onChange={() => {
              marcarCompleta(index)
            }}
          />

          <span>{item}</span>
        </label>
      </div>
      <button onClick={() => RemoverTarefa(index)}>
        <img src={iconeX} alt="Ícone de Remoção" />
      </button>
    </ContainerTarefa>
  )
}
