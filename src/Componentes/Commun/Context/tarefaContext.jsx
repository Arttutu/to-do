import { createContext, useContext, useEffect, useState } from "react"

export const TarefaContext = createContext()
TarefaContext.displayName = "Tarefas"

export const TarefaProvider = ({ children }) => {
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
    const novaListaTarefas = tarefa.filter((item) => !item.isComplete)
    setTarefa(novaListaTarefas)
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
