import styled from "styled-components";
import { CorBranca, Font, corAtiva, corTexto } from "../Variaveis";

export const ContainerControlador = styled.div`
  width: 540px;
  height: 64px;
  font-family: ${Font};
  font-size: 14px;
  color: ${corTexto};
  background-color: ${CorBranca};
  display: flex;
  align-items: center;
  justify-content: space-around;
  > div {
    display: flex;
    align-items: center;
    button {
      font-family: ${Font};
      font-size: 14px;
      color: ${corTexto};
      cursor: pointer;
      border: none;
      background-color: ${CorBranca};
      transition: 0.3s;
      &:hover {
        color: ${corAtiva};
      }
    }
  }
  button {
    font-family: ${Font};
    font-size: 14px;
    color: ${corTexto};
    cursor: pointer;
    border: none;
    background-color: ${CorBranca};
    transition: 0.3s;
    &:hover {
      color: ${corAtiva};
    }
  }
  @media (max-width: 768px) {
    width: 327px;

    > div {
      display: none;
    }
  }
`;
export const ContainerControladorMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 327px;
    height: 64px;
    margin-top: 16px;
    background-color: ${CorBranca};
    button {
      font-family: ${Font};
      font-size: 14px;
      color: ${corTexto};
      cursor: pointer;
      border: none;
      background-color: ${CorBranca};
      transition: 0.3s;
      &:hover {
        color: ${corAtiva};
      }
    }
  }
`;
