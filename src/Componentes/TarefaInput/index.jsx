import React, { useState } from "react"
import { ContainerEnviar, InputEnviar, InputTexto } from "./style"

export default function TarefaInput({ adicionarTarefa }) {
  const [novaTarefa, setNovaTarefa] = useState("") // Estado para controlar o valor do input

  const EnviarTarefa = (event) => {
    event.preventDefault()
    if (novaTarefa.trim() !== "") {
      const novaTarefaObj = {
        titulo: novaTarefa,
        isComplete: false,
      }
      adicionarTarefa((tarefas) => [...tarefas, novaTarefaObj]) // Adiciona o novo objeto de tarefa
      setNovaTarefa("") // Limpa o input após adicionar a tarefa
    }
  }

  return (
    <ContainerEnviar onSubmit={EnviarTarefa}>
      <InputEnviar type="submit" value="" />
      <InputTexto
        placeholder="digite sua nova tarefa aqui"
        value={novaTarefa} // Valor do input controlado pelo estado novaTarefa
        onChange={(e) => setNovaTarefa(e.target.value)} // Atualiza o estado conforme o usuário digita
      />
    </ContainerEnviar>
  )
}
