import React from "react"
import { Banner, ContainerSection, ContainerTitulo, Main } from "./styled"
import banner from "./assets/bg-desktop-light.jpg"
import lua from "./assets/icon-moon.svg"
import TarefaInput from "../../Componentes/TarefaInput"
import Tarefa from "../../Componentes/Tarefa"
import ControladorTarefa from "../../Componentes/ControladorTarefa"
import { useTarefaContex } from "../../Componentes/Commun/Context/tarefaContext"

export default function Home() {
  const { tarefa } = useTarefaContex()
  return (
    <>
      <Main>
        <Banner src={banner} alt="banner do site de tarefas desktop" />
        <ContainerSection>
          <ContainerTitulo>
            <h1>todo</h1>
            <img src={lua} alt="Um icone em formato de Lua" />
          </ContainerTitulo>
          <TarefaInput />
          {tarefa.map((item, index) => (
            <Tarefa key={index} item={item.titulo} index={index} />
          ))}
          <ControladorTarefa />
        </ContainerSection>
      </Main>
    </>
  )
}
