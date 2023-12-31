import React from "react"
import { ContainerControlador, ContainerControladorMobile } from "./style"
import { useTarefaContex } from "../Commun/Context/tarefaContext"

export default function ControladorTarefa() {
  const { LimparCompleta, setFiltro, tarefa } = useTarefaContex()
  return (
    <>
      <ContainerControlador>
        <span>{tarefa.length} itens restantes </span>
        <div>
          <button onClick={() => setFiltro("todas")}>Todas</button>
          <button onClick={() => setFiltro("ativa")}>Ativa</button>
          <button onClick={() => setFiltro("completa")}>Completa</button>
        </div>
        <button onClick={() => LimparCompleta()}>Limpar Completa</button>
      </ContainerControlador>
      <ContainerControladorMobile>
        <div>
          <button onClick={() => setFiltro("todas")}>Todas</button>
          <button onClick={() => setFiltro("ativa")}>Ativa</button>
          <button onClick={() => setFiltro("completa")}>Completa</button>
        </div>
      </ContainerControladorMobile>
    </>
  )
}
