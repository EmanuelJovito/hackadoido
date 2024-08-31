import { styled } from "styled-components";
import Image from "next/image";

export const Main = styled.main``;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 100wh;
`;
export const Nav = styled.nav`
  display: flex;
  font-size: 16px;
  color: white;
  gap: 32px;
  a {
    color: white;
    text-decoration: none;
  }
`;
export const Logo = styled(Image)`
  width: 202px;
  height: 85px;
`;
