import React from "react"
import { ContainerTarefa, InputTarefa } from "./style"
import iconeX from "./assets/icon-cross.svg"
import iconeCheck from "./assets/icon-check.svg"
import { useTarefaContex } from "../Commun/Context/tarefaContext"

export default function Tarefa({ item, index }) {
  const { RemoverTarefa, marcarCompleta } = useTarefaContex()
  return (
    <ContainerTarefa>
      <div>
        <label>
          <InputTarefa
            type="checkbox"
            icone={iconeCheck}
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
