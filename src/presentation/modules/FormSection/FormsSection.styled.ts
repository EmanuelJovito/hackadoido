import { styled } from "styled-components";
import Image from "next/image";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const TitleContainer = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #021850;
  width: 55rem;
  background-color: white;
  padding: 1rem;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Text = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  width: 57rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const BackgroundCircle = styled(Image)`
  position: absolute;
  top: 100;
  left: 0;
  object-fit: cover;
  width: 100%;
  z-index: -1;
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;
