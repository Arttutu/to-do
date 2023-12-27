import React, { useState } from "react"
import { CheckBoxCustom, ContainerTarefa } from "./style"
import iconeX from "./assets/icon-cross.svg"

import { useTarefaContex } from "../Commun/Context/tarefaContext"

export default function Tarefa({ item, index }) {
  const { RemoverTarefa, marcarCompleta } = useTarefaContex()

  return (
    <ContainerTarefa>
      <div>
        <label>
          <CheckBoxCustom>
            <input
              type="checkbox"
              onChange={() => {
                marcarCompleta(index)
              }}
            />
            <span />
          </CheckBoxCustom>
          <span>{item}</span>
        </label>
      </div>

      <img
        src={iconeX}
        alt="Ícone de Remoção"
        onClick={() => RemoverTarefa(index)}
      />
    </ContainerTarefa>
  )
}
