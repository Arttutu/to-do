import styled from "styled-components";
import { CorBranca, CorCinza, Font, corTexto } from "../Variaveis";

export const InputTarefa = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-left: 24px;
`;

export const ContainerTarefa = styled.div`
  width: 540px;
  height: 64px;
  box-sizing: border-box;
  padding-right: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${CorBranca};
  border-bottom: 1px solid ${CorCinza};
  label {
    display: flex;
    align-items: center;
    gap: 24px;
    color: ${corTexto};
    font-size: 18px;
    font-family: ${Font};
  }
  label input:checked + span {
    text-decoration: line-through;
  }
  button {
    border: none;
    background-color: ${CorBranca};
    img {
      display: none;
    }
  }

  @media (max-width: 768px) {
    width: 327px;
  }
  &:hover {
    img {
      display: block;
      cursor: pointer;
    }
  }
`;
