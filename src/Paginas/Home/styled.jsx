import styled from "styled-components";
import { CorBranca, Font, corFundo } from "../../Componentes/Variaveis";

export const Main = styled.main`
  background-color: ${corFundo};
  width: 100vw;
  height: 100vh;
`;
export const Banner = styled.img`
  position: absolute;
  width: 100vw;
  height: 300px;
  top: 0px;
`;
export const ContainerSection = styled.section`
  position: relative;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 375px;
  }
`;
export const ContainerTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  margin-top: 70px;
  h1 {
    font-family: ${Font};
    text-transform: uppercase;
    color: ${CorBranca};
    font-size: 40px;
    font-weight: bold;
  }
  img {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 768px) {
    width: 325px;
    height: 20px;
  }
`;
