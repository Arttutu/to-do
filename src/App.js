import { TarefaProvider } from "./Componentes/Commun/Context/tarefaContext"
import { ThemeProvider, ThemeConsumer } from "styled-components"
import Home from "./Paginas/Home"
import {
  TemaProvider,
  useTemaContex,
} from "./Componentes/Commun/Context/temaContext"

function App() {
  const [tema, setTemas, temas] = useTemaContex()
  return (
    <TemaProvider>
      <ThemeProvider theme={temas[setTemas]}>
        <TarefaProvider>
          <Home />
        </TarefaProvider>
      </ThemeProvider>
    </TemaProvider>
  )
}

export default App
