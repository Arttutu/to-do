import React from "react";
import { ContainerControlador, ContainerControladorMobile } from "./style";

export default function ControladorTarefa() {
  return (
    <>
      <ContainerControlador>
        <span>Itens restantes</span>
        <div>
          <button>Todas</button>
          <button>Ativa</button>
          <button>Completa</button>
        </div>
        <button>Limpar Completa</button>
      </ContainerControlador>
      <ContainerControladorMobile>
        <div>
          <button>Todas</button>
          <button>Ativa</button>
          <button>Completa</button>
        </div>
      </ContainerControladorMobile>
    </>
  );
}
