import { styled } from "styled-components";
import Image from "next/image";

export const Main = styled.main``

export const Title = styled.h1`
  font-size: 4.5rem;
  color: #0841D3;
`

export const TopSection = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7rem;
`

export const ImageTag = styled.div`
  width: 9rem;
  height: 4rem;
  background-color: #0841D3;
  border-radius: 30px 0 30px 0;
`

export const ButtonsSection = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
`

export const CardsSection = styled.div`
  width: 100%;
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

export const Card = styled.div`
  width: 28rem;
  height: 45rem;
  border-radius: 12px;
  box-shadow: 0px 1px 8px 3px #0000002E;
`

export const CardTitle = styled.h1`
  color: #0841D3;
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
`

export const CardSubtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 4rem;
`

export const Locantion = styled.div`
  display: flex;
  width: 52%;
  align-items: center;
  justify-content: space-between;
  color: #0841D3;
  font-size: 1.5rem;
`