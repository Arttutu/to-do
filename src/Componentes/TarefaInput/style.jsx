import styled from "styled-components";
import { CorBranca, CorCinza, Font, corTexto } from "../Variaveis";

export const ContainerEnviar = styled.form`
  width: 540px;
  height: 64px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  margin: 40px 0 24px;
  padding-left: 24px;
  background-color: ${CorBranca};
  font-family: ${Font};
  color: ${corTexto};
  font-size: 18px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 327px;
  }
`;
export const InputEnviar = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${corTexto};
  background-color: ${CorBranca};
`;
export const InputTexto = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${CorBranca};
  font-family: ${Font};
  color: ${corTexto};
  font-size: 18px;
  padding-left: 24px;
  &:focus {
    outline: none;
  }
`;
