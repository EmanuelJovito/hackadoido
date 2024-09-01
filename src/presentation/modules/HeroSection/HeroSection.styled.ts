import { styled } from "styled-components";
import Image from "next/image";

export const Main = styled.main`
  display: flex;
  width: 100vw;
`;
export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 135.1rem;
  object-fit: cover;
  z-index: -1;
  background-color: #021850;
  @media (max-width: 768px) {
    height: 225rem;
  }
`;
export const BackgroundCircle = styled(Image)`
  position: absolute;
  top: -10rem;
  left: 0;
  object-fit: cover;
  width: 100%;
  z-index: -1;
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100wh;
  padding: 2.4rem;
  @media (max-width: 768px) {
    padding: 1rem 2.4rem;
  }
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
  @media (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
export const Logo = styled(Image)`
  position: relative;
  width: 20.2rem;
  height: 8.5rem;
  left: -30px;
  @media (max-width: 768px) {
    width: 10rem;
  }
`;
export const HeroSection = styled.section`
  margin-top: 4.3rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
export const Title = styled.h1`
  width: 88.1rem;
  font-size: 5.9rem;
  color: white;
  @media (max-width: 768px) {
    width: 30rem;
    font-size: 2.5rem;
    font-weight: 500;
  }
`;
export const Span = styled.div`
  margin-top: 1.6rem;
  width: 80.4rem;
  line-height: 1.6;
  font-size: 2rem;
  color: white;
  @media (max-width: 768px) {
    width: 30rem;
    font-size: 1.6rem;
  }
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
  margin-top: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  object-fit: cover;
  z-index: -1;
  @media (max-width: 768px) {
    overflow: hidden;
    display: none;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
  gap: 3.1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 22.3rem;
  border-radius: 12px;
  gap: 0.9rem;
  background-color: white;
  align-items: center;
`;
export const Icon = styled(Image)`
  margin-top: 3.6rem;
`;
export const Number = styled.span`
  font-size: 4.8rem;
  font-weight: 700;
`;
export const ShortText = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
`;
export const LawContainer = styled.div`
  margin-top: 12.2rem;
`;
export const Law = styled.h1`
  font-size: 5.2rem;
  font-weight: 700;
  color: white;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
export const LawContainerr = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.3rem;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1;
  color: #ffffff;

  &:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
  &:not(:first-child) {
    margin-left: 4.2rem;
  }
  @media (max-width: 768px) {
    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      border-right: none;
    }
    &:not(:first-child) {
      margin-left: 0;
      margin-top: 3.2rem;
    }
  }
`;

export const LawTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  width: 240.04px;
  margin-right: 32px;
`;
