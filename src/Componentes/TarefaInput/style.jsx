import styled from "styled-components";
import { Font, corTexto } from "../Variaveis";

export const Input = styled.input`
  width: 540px;
  height: 64px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  margin: 40px 0 24px;
  padding-left: 24px;
  font-family: ${Font};
  color: ${corTexto};
  font-size: 18px;
  @media (max-width: 768px) {
    width: 327px;
    height: 48px;
  }
`;
