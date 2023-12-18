import styled from "styled-components";
import { CorBranca, CorCinza } from "../Variaveis";

export const InputTarefa = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 100%;
`;
export const ContainerTarefa = styled.div`
  width: 540px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0px;
  background-color: ${CorBranca};
  border-bottom: 1px solid ${CorCinza};
`;
