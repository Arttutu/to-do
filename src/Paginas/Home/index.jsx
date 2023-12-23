import React, { useState } from "react"
import { Banner, ContainerSection, ContainerTitulo, Main } from "./styled"
import banner from "./assets/bg-desktop-light.jpg"
import lua from "./assets/icon-moon.svg"
import TarefaInput from "../../Componentes/TarefaInput"
import Tarefa from "../../Componentes/Tarefa"
import ControladorTarefa from "../../Componentes/ControladorTarefa"

export default function Home() {
  const [tarefa, setTarefa] = useState([
    {
      titulo: "Ler por 1 hora",
      isComplete: false,
    },
    {
      titulo: "Ler por 1 hora",
      isComplete: false,
    },
    {
      titulo: "Ler por 1 hora",
      isComplete: false,
    },
  ])

  const RemoverTarefa = (indexParaRemover) => {
    const novaListaTarefas = tarefa.filter(
      (_, index) => index !== indexParaRemover
    ) // _, convencao indica que nao vamos usar o valor do array, o segundo parametro indica o índice que nesse caso queremos usar
    setTarefa(novaListaTarefas)
  }
  const mostrarTodas = () => {}
  const LimparCompleta = () => {
    const novaListaTarefas = tarefa.filter((item) => !item.isComplete)
    setTarefa(novaListaTarefas)
  }
  const mostrarAtivas = () => {}
  const marcarCompleta = (index) => {
    const novaListaTarefa = tarefa.map((item, i) => {
      if (i === index) {
        return { ...item, isComplete: true }
      }
      return item
    })

    console.log(novaListaTarefa)
    setTarefa(novaListaTarefa)
  }

  const MostrarCompletas = () => {}
  return (
    <>
      <Main>
        <Banner src={banner} alt="banner do site de tarefas desktop" />
        <ContainerSection>
          <ContainerTitulo>
            <h1>todo</h1>
            <img src={lua} alt="Um icone em formato de Lua" />
          </ContainerTitulo>
          <TarefaInput adicionarTarefa={setTarefa} />
          {tarefa.map((item, index) => (
            <Tarefa
              key={index}
              item={item.titulo}
              index={index}
              removerTarefa={RemoverTarefa}
              marcarCompleta={marcarCompleta}
            />
          ))}
          <ControladorTarefa
            mostrarTodas={mostrarTodas}
            mostrarAtivas={mostrarAtivas}
            LimparCompleta={LimparCompleta}
            MostrarCompletas={MostrarCompletas}
          />
        </ContainerSection>
      </Main>
    </>
  )
}
