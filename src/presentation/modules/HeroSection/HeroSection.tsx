"use client";
import * as S from "./HeroSection.styled";
import Mask from "@/../public/Mask group.svg";
export function HeroSection() {
  return (
    <S.Main>
      <S.Header>
        <S.Logo src={Mask} alt=""></S.Logo>
        <S.Nav>
          <a href="">Início</a>
          <a href="">Pilares</a>
          <a href="">Diferenciais</a>
        </S.Nav>
      </S.Header>
    </S.Main>
  );
}
