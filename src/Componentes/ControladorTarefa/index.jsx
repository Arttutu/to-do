import React from "react"
import { ContainerControlador, ContainerControladorMobile } from "./style"
import { useTarefaContex } from "../Commun/Context/tarefaContext"

export default function ControladorTarefa() {
  const { mostrarTodas, mostrarAtivas, MostrarCompletas, LimparCompleta } =
    useTarefaContex()
  return (
    <>
      <ContainerControlador>
        <span>Itens restantes</span>
        <div>
          <button onClick={() => mostrarTodas()}>Todas</button>
          <button onClick={() => mostrarAtivas()}>Ativa</button>
          <button onClick={() => MostrarCompletas()}>Completa</button>
        </div>
        <button onClick={() => LimparCompleta()}>Limpar Completa</button>
      </ContainerControlador>
      <ContainerControladorMobile>
        <div>
          <button onClick={() => mostrarTodas()}>Todas</button>
          <button onClick={() => mostrarAtivas()}>Ativa</button>
          <button onClick={() => MostrarCompletas()}>Completa</button>
        </div>
      </ContainerControladorMobile>
    </>
  )
}
