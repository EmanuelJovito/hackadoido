"use client";
import { Wrapper } from "@/presentation/shared/components/layout/Wrapper/Wrapper";
import * as S from "./AboutStation.styled";
import Mask from "@/../public/Mask group.svg";
import Image from "next/image";
import ArrowLeft from '@/../public/ArrowCircleLeft.svg'
import ArrowRight from '@/../public/ArrowCircleRight.svg'
import Card1 from '@/../public/card1.jpg'
import MapPin from '@/../public/MapPin.svg'
import Logo from '@/../public/logo.svg'

export function AboutStation() {
  return (
    <S.Main>
      <Wrapper>
        <S.TopSection>
          <S.Title>Conheça as Estações Tech</S.Title>
          <S.ButtonsSection>
            <S.Button>
              <Image src={ArrowLeft} width={50} height={50} alt="Seta para a esquerda"/>
            </S.Button>
            <S.Button>
              <Image src={ArrowRight} width={50} height={50} alt="Seta para a direita"/>
            </S.Button>
          </S.ButtonsSection>
        </S.TopSection>
        <S.CardsSection>
          <S.Card>
            <Image src={Card1} width={280} height={210} alt="Jovens usando um computador"/>
            <S.ImageTag><Image src={Logo} width={39} height={39} alt="logo"/></S.ImageTag>

            <S.CardDescription>
              <S.CardTitle>São Vicente Ferrer</S.CardTitle>
              <S.CardSubtitle>Centro de inovação focado em tecnologia e empreendedorismo, oferecendo suporte e capacitação para a comunidade local.</S.CardSubtitle>
              <S.Locantion><Image src={MapPin} width={16} height={16} alt="marcação de mapa"/>R. Dom Pedro II</S.Locantion>
            </S.CardDescription>
          </S.Card>
        </S.CardsSection>
      </Wrapper>
    </S.Main>
  );
}
