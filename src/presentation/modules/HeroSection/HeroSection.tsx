"use client";
import * as S from "./HeroSection.styled";
import Mask from "@/../public/Mask group.svg";
import background from "@/../public/background.svg";
import ArrowRight from "@/../public/ArrowRight.svg";
import LogoEstacao from "@/../public/logoEstacaoTech.svg";
import Rocket from "@/../public/rocket.svg";
import { Wrapper } from "@/presentation/shared/components/layout/Wrapper/Wrapper";
export function HeroSection() {
  return (
    <S.Main>
      <Wrapper>
        <S.Header>
          <S.Background />
          <S.BackgroundCircle src={background} alt="" />
          <S.LogoTech src={LogoEstacao} alt=""></S.LogoTech>
          <S.Logo src={Mask} alt="" />
          <S.Nav>
            <a href="">Início</a>
            <a href="">Pilares</a>
            <a href="">Diferenciais</a>
          </S.Nav>
        </S.Header>
        <S.HeroSection>
          <S.Title>Transforme Vidas no Maranhão com a Estação Tech</S.Title>
          <S.Span>
            Apoie a capacitação de comunidades no Maranhão com cursos que
            transformam vidas. Como parceiro pela "Lei do Bem", sua empresa
            contribui para a inclusão social e ainda recebe incentivos fiscais.
            Junte-se a nós e faça a diferença!
          </S.Span>
          <S.Btn>
            Seja um parceiro<S.Arrow src={ArrowRight} alt=""></S.Arrow>
          </S.Btn>
          <S.CardContainer>
            <S.Card>
              <S.Icon src={Rocket} alt=""></S.Icon>
            </S.Card>
          </S.CardContainer>
        </S.HeroSection>
      </Wrapper>
    </S.Main>
  );
}
