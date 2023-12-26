import { TarefaProvider } from "./Componentes/Commun/Context/tarefaContext"
import { ThemeProvider } from "styled-components"
import Home from "./Paginas/Home"
import {
  CorBranca,
  corEscura,
  corFundo,
  corFundo2,
  corTexto,
  corTexto2,
} from "./Componentes/Variaveis"
import { useState } from "react"

function App() {
  const [tema, setTema] = useState("Light")
  const temas = {
    Light: {
      colors: {
        corContainer: CorBranca,
        corTexto: corTexto,
        corFundo: corFundo,
      },
    },
    Dark: {
      colors: {
        corContainer: corEscura,
        corTexto: corTexto2,
        corFundo: corFundo2,
      },
    },
  }
  return (
    <ThemeProvider theme={temas[tema]}>
      <TarefaProvider>
        <Home tema={tema} setTema={setTema} />
      </TarefaProvider>
    </ThemeProvider>
  )
}

export default App
