import { createContext, useContext, useState } from "react"
export const TemaContext = createContext()
TemaContext.displayName = "tema"

export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState("Light")
  const temas = {
    Light: {
      colors: {},
    },
    Dark: {
      colors: {},
    },
  }
  return (
    <TemaContext.Provider value={(temas, tema, setTema)}>
      {children}
    </TemaContext.Provider>
  )
}

export const useTemaContex = () => {
  const [temas, tema, setTemas] = useContext(TemaContext)

  return temas, tema, setTemas
}
