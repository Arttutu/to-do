import React from "react"
import {
  Banner,
  BannerMobile,
  ContainerSection,
  ContainerTitulo,
  Main,
} from "./styled"
import banner from "./assets/bg-desktop-light.jpg"
import bannerMobile from "./assets/bg-mobile-light.jpg"
import bannerDark from "./assets/bg-desktop-dark.jpg"
import bannerMobileDark from "./assets/bg-mobile-dark.jpg"
import lua from "./assets/icon-moon.svg"
import sol from "./assets/icon-sun.svg"
import TarefaInput from "../../Componentes/TarefaInput"
import Tarefa from "../../Componentes/Tarefa"
import ControladorTarefa from "../../Componentes/ControladorTarefa"
import { useTarefaContex } from "../../Componentes/Commun/Context/tarefaContext"

export default function Home({ tema, setTema }) {
  const { tarefa, filtro } = useTarefaContex()
  const TemaLayouts = (tema) => (tema === "Light" ? "Dark" : "Light")
  const MudarTema = () => {
    setTema(TemaLayouts)
  }
  return (
    <>
      <Main>
        <Banner
          src={tema === "Light" ? banner : bannerDark}
          alt="banner do site de tarefas desktop"
        />
        <BannerMobile
          src={tema === "Light" ? bannerMobile : bannerMobileDark}
        />
        <ContainerSection>
          <ContainerTitulo>
            <h1>todo</h1>

            <img
              src={tema === "Light" ? lua : sol}
              alt="Um icone em formato de Lua"
              onClick={() => MudarTema()}
            />
          </ContainerTitulo>
          <TarefaInput />
          {tarefa
            .filter((tarefa) =>
              filtro === "todas"
                ? true
                : filtro === "completa"
                ? !tarefa.isComplete
                : tarefa.isComplete
            )
            .map((item, index) => (
              <Tarefa key={index} item={item.titulo} index={index} />
            ))}
          <ControladorTarefa />
        </ContainerSection>
      </Main>
    </>
  )
}
