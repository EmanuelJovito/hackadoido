import { styled } from "styled-components";
import Image from "next/image";

export const Main = styled.main`
  margin-top: 10rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: end;
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
