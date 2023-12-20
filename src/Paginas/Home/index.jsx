import React, { useState } from "react";
import { Banner, ContainerSection, ContainerTitulo, Main } from "./styled";
import banner from "./assets/bg-desktop-light.jpg";
import lua from "./assets/icon-moon.svg";
import TarefaInput from "../../Componentes/TarefaInput";
import Tarefa from "../../Componentes/Tarefa";
import ControladorTarefa from "../../Componentes/ControladorTarefa";

export default function Home() {
  const [tarefa, setTarefa] = useState([
    "Ler por 1 hora",
    "Terminar todos os desafios do FronEnd Mentor",
    "10 minutos de meditação",
    "Caminhar no parke 3 vezes",
    "Pick up groceries",
  ]);

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
              item={item}
              index={index} // Passa o índice para a tarefa
              removerTarefa={setTarefa}
              tarefa={tarefa}
            />
          ))}
          <ControladorTarefa />
        </ContainerSection>
      </Main>
    </>
  );
}
