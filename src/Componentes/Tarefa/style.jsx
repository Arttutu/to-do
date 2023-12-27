import styled from "styled-components"
import { CorCinza, Font } from "../Variaveis"
import check from "./assets/icon-check.svg"

export const CheckBoxCustom = styled.label`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: 24px;
  cursor: pointer;
  input[type="checkbox"] {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid ${CorCinza};
    transition: background-color 0.3s ease;
  }
  input[type="checkbox"]:checked + span {
    background: url(${check}), linear-gradient(#55ddff, #c058f3);
    background-repeat: no-repeat;
    border: none;
    background-position: center;
  }
  input[type="checkbox"]:hover + span {
    border: 6px solid linear-gradient(#55ddff, #c058f3);
  }
`

export const ContainerTarefa = styled.div`
  width: 540px;
  height: 64px;
  box-sizing: border-box;
  padding-right: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.corContainer};
  border-bottom: 1px solid ${CorCinza};
  label {
    display: flex;
    align-items: center;
    gap: 24px;
    color: ${(props) => props.theme.colors.corTexto};
    font-size: 18px;
    font-family: ${Font};
  }
  label input:checked + span {
    text-decoration: line-through;
  }
  button {
    border: none;
    background-color: ${(props) => props.theme.colors.corContainer};
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
`
