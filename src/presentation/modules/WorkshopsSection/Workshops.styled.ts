import { styled } from "styled-components";
import Image from "next/image";

export const Main = styled.main`
 height: 50vw;
  margin-top: 10rem;
  background-color: #021850;
`;

export const backgroundImg = styled(Image)

export const WhorksContent = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
`
export const CardContent = styled.div`
 display: flex;
  gap: 8rem;
`

export const Title = styled.h1`
  /* width: 95.1rem; */
  font-size: 4.5rem;
  color: white;
  margin-top: 5rem;
`;