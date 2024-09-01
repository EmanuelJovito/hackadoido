import { styled } from "styled-components";

export const Main = styled.main`
  margin-top: 10rem;
  @media (max-width: 768px) {
    margin-top: 15rem;
  }
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  color: #0841d3;
`;

export const TopSection = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7rem;
`;

export const ImgCard = styled.div``;

export const ImageSection = styled.div`
  height: 20rem;
`;

export const ImageTag = styled.div`
  width: 9rem;
  height: 4rem;
  background-color: #0841d3;
  border-radius: 30px 0 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 20px;
  left: 190px;
  @media (max-width: 768px) {
    left: 190px;
  }
  @media (max-width: 720px) {
    left: 152px;
  }
  @media (max-width: 430px) {
    display: none;
  }
`;

export const ButtonsSection = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const CardsSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const Card = styled.div`
  width: 28rem;
  height: 45rem;
  border-radius: 12px;
  box-shadow: 0px 1px 8px 3px #0000002e;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
    width: 28rem;
    height: 50rem;
  }
`;

export const CardTitle = styled.h1`
  color: #0841d3;
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

export const CardSubtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 3.5rem;
`;

export const Locantion = styled.div`
  display: flex;
  width: 280px;
  align-items: center;
  color: #0841d3;
  font-size: 1.5rem;
`;
