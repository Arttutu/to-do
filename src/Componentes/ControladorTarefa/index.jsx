import React from "react";
import { ContainerControlador } from "./style";

export default function ControladorTarefa() {
  return (
    <ContainerControlador>
      <span>Itens restantes</span>
      <div>
        <button>Todas</button>
        <button>Ativa</button>
        <button>Completa</button>
      </div>
      <button>Limpar Completa</button>
    </ContainerControlador>
  );
}
