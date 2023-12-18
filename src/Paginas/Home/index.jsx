import React from "react";
import { Banner, ContainerSection, ContainerTitulo, Main } from "./styled";
import banner from "./assets/bg-desktop-light.jpg";
import lua from "./assets/icon-moon.svg";
import TarefaInput from "../../Componentes/TarefaInput";
import Tarefa from "../../Componentes/Tarefa";
export default function Home() {
  return (
    <>
      <Main>
        <Banner src={banner} alt="banner do site de tarefas" />
        <ContainerSection>
          <ContainerTitulo>
            <h1>todo</h1>
            <img src={lua} alt="Um icone em formato de Lua" />
          </ContainerTitulo>
          <TarefaInput />
          <Tarefa />
          <Tarefa />
          <Tarefa />
          <Tarefa />
          <Tarefa />
          <Tarefa />
          <Tarefa />
          <Tarefa />
          <Tarefa />
          <Tarefa />
          <Tarefa />
          <Tarefa />
        </ContainerSection>
      </Main>
    </>
  );
}
