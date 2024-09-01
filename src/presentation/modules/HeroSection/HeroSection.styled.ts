import { styled } from "styled-components";
import Image from "next/image";

export const Main = styled.main``;
export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 135.1rem;
  object-fit: cover;
  z-index: -1;
  background-color: #021850;
`;
export const BackgroundCircle = styled(Image)`
  position: absolute;
  top: -10rem;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100wh;
  padding: 2.4rem;
`;
export const Nav = styled.nav`
  display: flex;
  font-size: 1.6rem;
  color: white;
  gap: 3.2rem;
  a {
    color: white;
    text-decoration: none;
  }
`;
export const Logo = styled(Image)`
  position: relative;
  width: 20.2rem;
  height: 8.5rem;
  left: -30px;
`;
export const HeroSection = styled.section`
  margin-top: 4.3rem;
`;
export const Title = styled.h1`
  width: 95.1rem;
  font-size: 6.4rem;
  color: white;
`;
export const Span = styled.div`
  margin-top: 1.6rem;
  width: 87.4rem;
  font-size: 2.2rem;
  color: white;
`;
export const Btn = styled.button`
  margin-top: 3.5rem;
  border: none;
  background-color: #fff;
  color: black;
  font-size: 1.6rem;
  font-weight: 6 00;
  padding: 1.6rem 2.4rem;
  border-radius: 68px;
  gap: 0.6rem;
  display: flex;
  align-items: center;
`;
export const Arrow = styled(Image)``;
export const LogoTech = styled(Image)`
  margin-top: 3.9rem;
  position: absolute;
  top: 0;
  right: 0;
  object-fit: cover;
  z-index: -1;
`;
export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const Card = styled.div`
  width: 28rem;
  height: 22.3rem;
  border-radius: 12px;
  background-color: white;
`;
export const Icon = styled(Image)``;
