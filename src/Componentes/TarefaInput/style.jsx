import styled from "styled-components"
import { CorCinza, Font } from "../Variaveis"

export const ContainerEnviar = styled.form`
  width: 540px;
  height: 64px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  margin: 40px 0 24px;
  padding-left: 24px;
  background-color: ${(props) => props.theme.colors.corContainer};
  font-family: ${Font};
  color: ${(props) => props.theme.colors.corTexto};
  font-size: 18px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 327px;
  }
`
export const InputEnviar = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${CorCinza};
  background-color: ${(props) => props.theme.colors.corContainer};
  cursor: pointer;

  input[type="submit"]:hover {
    border: 6px solid linear-gradient(#55ddff, #c058f3);
  }
`
export const InputTexto = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.corContainer};
  font-family: ${Font};
  color: ${(props) => props.theme.colors.corTexto};
  font-size: 18px;
  padding-left: 24px;
  &:focus {
    outline: none;
  }
`
