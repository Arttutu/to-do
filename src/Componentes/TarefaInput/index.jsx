import React, { useState } from "react";
import { ContainerEnviar, InputEnviar, InputTexto } from "./style";

export default function TarefaInput({ adicionarTarefa }) {
  const [novaTarefa, setNovaTarefa] = useState(""); // Estado para controlar o valor do input
  const EnviarTarefa = (event) => {
    event.preventDefault();
    adicionarTarefa((tarefas) => [...tarefas, novaTarefa]); // Adiciona a nova tarefa usando o valor do estado novaTarefa
    setNovaTarefa(""); // Limpa o input após adicionar a tarefa
  };

  return (
    <ContainerEnviar onSubmit={EnviarTarefa}>
      <InputEnviar type="submit" value="" />
      <InputTexto
        placeholder="digite sua nova tarefa aqui"
        value={novaTarefa} // Valor do input controlado pelo estado novaTarefa
        onChange={(e) => setNovaTarefa(e.target.value)} // Atualiza o estado conforme o usuário digita
      />
    </ContainerEnviar>
  );
}
