import React, { useState } from "react"
import { ContainerEnviar, InputEnviar, InputTexto } from "./style"
import { useTarefaContex } from "../Commun/Context/tarefaContext"

export default function TarefaInput() {
  const { adicionarTarefa } = useTarefaContex()
  const [novaTarefa, setNovaTarefa] = useState("")
  const EnviarTarefa = (event) => {
    event.preventDefault()
    if (novaTarefa.trim() !== "") {
      return adicionarTarefa(novaTarefa)
    }
    setNovaTarefa("")
  }

  return (
    <ContainerEnviar onSubmit={EnviarTarefa}>
      <InputEnviar type="submit" value="" />
      <InputTexto
        placeholder="digite sua nova tarefa aqui"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
    </ContainerEnviar>
  )
}
