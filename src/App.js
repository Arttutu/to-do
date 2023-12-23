import { TarefaProvider } from "./Componentes/Commun/Context/tarefaContext"
import Home from "./Paginas/Home"

function App() {
  return (
    <TarefaProvider>
      <Home />
    </TarefaProvider>
  )
}

export default App
