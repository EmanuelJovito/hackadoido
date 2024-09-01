import { styled } from "styled-components";
import Image from "next/image";

export const cardContent = styled.div`
  width: 384px;
  height: 500px;
  border-radius: 24px;

`

export const cardImage = styled(Image)`
  position: absolute;

`;

export const cardButton = styled.button`
  width: 140px;
  height: 50px; 
  display: flex;
  justify-content: center;
  gap: 4px;
  align-items: center;
  background-color: #0841D3;
  border-radius: 42px;
  border: none;
  padding: 10px;
  color: white;
  font-size: 16px;

`;

export const cardTitle = styled.h1`
  color: #0841D3;
  font-size: 32px;
  font-weight: 600;
  position: relative;
  bottom: 0;
`

export const CardDescription = styled.h2`
  color: #20241E;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  opacity: 0.8;
`;

export const cardInfosContent = styled.div`
  height: 100%;
  position: relative;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
`

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const buttonContent = styled.div`
  display: flex;
  justify-content: flex-end;
 
`
export const descriptionContent = styled.div`
  display: flex;
  gap: 0.5rem;
 
`