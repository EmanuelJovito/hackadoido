"use client";
import { Wrapper } from "@/presentation/shared/components/layout/Wrapper/Wrapper";
import * as S from "./AboutStation.styled";
import Mask from "@/../public/Mask group.svg";
import Image from "next/image";
import ArrowLeft from '@/../public/ArrowCircleLeft.svg'
import ArrowRight from '@/../public/ArrowCircleRight.svg'
import Card1 from '@/../public/card1.jpg'
import Card2 from '@/../public/card2.jpg'
import Card3 from '@/../public/card3.jpg'
import Card4 from '@/../public/card4.jpg' 
import MapPin from '@/../public/MapPin.svg'
import Logo from '@/../public/logo.svg'

export function AboutStation() {
  return (
    <S.Main>
      <Wrapper>
        <S.TopSection>
          <S.Title>Conheça as Estações Tech</S.Title>
          {/* <S.ButtonsSection>
            <S.Button>
              <Image src={ArrowLeft} width={50} height={50} alt="Seta para a esquerda"/>
            </S.Button>
            <S.Button>
              <Image src={ArrowRight} width={50} height={50} alt="Seta para a direita"/>
            </S.Button>
          </S.ButtonsSection> */}
        </S.TopSection>
        <S.CardsSection>
          <S.Card>
            <S.ImageSection>
              <S.ImgCard><Image src={Card1}  alt="Jovens usando um computador" style={{borderRadius: '12px 12px 0 0', width: '100%', height: '100%'}}/></S.ImgCard>
              
              <S.ImageTag><Image src={Logo} width={39} height={39} alt="logo"/></S.ImageTag>
            </S.ImageSection>

            <S.CardDescription>
              <S.CardTitle>São Vicente Ferrer</S.CardTitle>
              <S.CardSubtitle>Centro de inovação focado em tecnologia e empreendedorismo, oferecendo suporte e capacitação para a comunidade local.</S.CardSubtitle>
              <S.Locantion><Image src={MapPin} width={16} height={16} alt="marcação de mapa"/>R. Dom Pedro II</S.Locantion>
            </S.CardDescription>
          </S.Card>
          <S.Card>
            <S.ImageSection>
            <S.ImgCard><Image src={Card3}  alt="Jovens usando um computador" style={{borderRadius: '12px 12px 0 0', width: '100%', height: '100%'}}/></S.ImgCard>
              <S.ImageTag><Image src={Logo} width={39} height={39} alt="logo"/></S.ImageTag>
            </S.ImageSection>

            <S.CardDescription>
              <S.CardTitle>Sol e Mar</S.CardTitle>
              <S.CardSubtitle>Centro de inovação que promove tecnologia e empreendedorismo, oferecendo recursos e capacitação para a comunidade.</S.CardSubtitle>
              <S.Locantion><Image src={MapPin} width={16} height={16} alt="marcação de mapa"/>Rua da União - Sol e Mar</S.Locantion>
            </S.CardDescription>
          </S.Card>
          <S.Card>
            <S.ImageSection>
            <S.ImgCard><Image src={Card3}  alt="Jovens usando um computador" style={{borderRadius: '12px 12px 0 0', width: '100%', height: '100%'}}/></S.ImgCard>
              <S.ImageTag><Image src={Logo} width={39} height={39} alt="logo"/></S.ImageTag>
            </S.ImageSection>

            <S.CardDescription>
              <S.CardTitle>Maracanã</S.CardTitle>
              <S.CardSubtitle>Espaço de inovação que oferece capacitação e recursos tecnológicos para a comunidade local.</S.CardSubtitle>
              <S.Locantion><Image src={MapPin} width={16} height={16} alt="marcação de mapa"/>R. Evandro Bessa - Maracanã</S.Locantion>
            </S.CardDescription>
          </S.Card>
          <S.Card>
            <S.ImageSection>
            <S.ImgCard><Image src={Card2}  alt="Jovens usando um computador" style={{borderRadius: '12px 12px 0 0', width: '100%', height: '100%'}}/></S.ImgCard>
              <S.ImageTag><Image src={Logo} width={39} height={39} alt="logo"/></S.ImageTag>
            </S.ImageSection>

            <S.CardDescription>
              <S.CardTitle>João de Deus</S.CardTitle>
              <S.CardSubtitle>Um espaço dedicado à inovação e inclusão digital, oferecendo cursos e recursos tecnológicos para a comunidade.</S.CardSubtitle>
              <S.Locantion><Image src={MapPin} width={16} height={16} alt="marcação de mapa"/>Av. Tales Neto - João de Deus</S.Locantion>
            </S.CardDescription>
          </S.Card>
        </S.CardsSection>
      </Wrapper>
    </S.Main>
  );
}
