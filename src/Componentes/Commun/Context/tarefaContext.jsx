import { createContext, useContext, useState } from "react"

export const TarefaContext = createContext()
TarefaContext.displayName = "Tarefas"

export const TarefaProvider = ({ children }) => {
  const [tarefa, setTarefa] = useState([
    {
      titulo: "Ler por 1 hora",
      isComplete: false,
    },
    {
      titulo: "Meditar por 10 minutos",
      isComplete: false,
    },
    {
      titulo: "Faça um desafio de front-end",
      isComplete: false,
    },
    {
      titulo: "Caminhe no Park 3x",
      isComplete: false,
    },
  ])
  const [filtro, setFiltro] = useState("todas")

  return (
    <TarefaContext.Provider value={{ tarefa, setTarefa, filtro, setFiltro }}>
      {children}
    </TarefaContext.Provider>
  )
}
export const useTarefaContex = () => {
  const { tarefa, setTarefa, filtro, setFiltro } = useContext(TarefaContext)

  const RemoverTarefa = (indexParaRemover) => {
    const novaListaTarefas = tarefa.filter(
      (_, index) => index !== indexParaRemover
    )
    setTarefa(novaListaTarefas)
  }
  const LimparCompleta = () => {
    const filtrarTarefas = tarefa.filter((item) => item.isComplete === false)
    setTarefa(filtrarTarefas)
  }
  const marcarCompleta = (index) => {
    const novaListaTarefa = tarefa.map((item, i) => {
      if (i === index) {
        return { ...item, isComplete: !item.isComplete }
      }
      return item
    })

    console.log(novaListaTarefa)
    setTarefa(novaListaTarefa)
  }
  const adicionarTarefa = (novaTarefa) => {
    const novaTarefaObj = {
      titulo: novaTarefa,
      isComplete: false,
    }
    setTarefa((tarefas) => [...tarefas, novaTarefaObj])
  }
  return {
    tarefa,
    setTarefa,
    filtro,
    setFiltro,
    RemoverTarefa,
    adicionarTarefa,
    marcarCompleta,
    LimparCompleta,
  }
}
