import { createContext, useContext, useState } from "react"
import {
  CorBranca,
  corFundo,
  corFundo2,
  corTexto,
  corTexto2,
} from "../../Variaveis"

export const TemaContext = createContext()
TemaContext.displayName = "tema"

export const TemaProvider = ({ children }) => {
  const TemaLayouts = (tema) => (tema === "Light" ? "Dark" : "Light")
  const [tema, setTema] = useState("Light")
  const temas = {
    Light: {
      colors: {
        corBranca: CorBranca,
        corTexto: corTexto,
        corFundo: corFundo,
      },
    },
    Dark: {
      colors: {
        corBranca: CorBranca,
        corTexto: corTexto2,
        corFundo: corFundo2,
      },
    },
  }
  return (
    <TemaContext.Provider value={{ temas, tema, setTema, TemaLayouts }}>
      {children}
    </TemaContext.Provider>
  )
}

export const useTemaContex = () => {
  const { temas, tema, setTema, TemaLayouts } = useContext(TemaContext)

  function mudarTema() {
    return setTema(TemaLayouts)
  }
  return { temas, tema, setTema, mudarTema }
}
