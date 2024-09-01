"use client";
import * as S from "./HeroSection.styled";
import Mask from "@/../public/Mask group.svg";
import background from "@/../public/background.svg";
import ArrowRight from "@/../public/ArrowRight.svg";
import LogoEstacao from "@/../public/logoEstacaoTech.svg";
import Rocket from "@/../public/rocket.svg";
import IconPeople from "@/../public/icon-people.svg";
import Clarity from "@/../public/clarity_lightbulb-solid.svg";
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
            <a href="">Estações</a>
            <a href="">Oficinas</a>
            <a href="">Contato</a>
          </S.Nav>
        </S.Header>
        <S.HeroSection>
          <S.Title>Transforme Vidas no Maranhão com a Estação Tech</S.Title>
          <S.Span>
            Apoie a capacitação de comunidades no Maranhão com cursos que
            transformam vidas. Como parceiro pela Lei do Bem, sua empresa
            contribui para a inclusão social e ainda recebe incentivos fiscais.
            Junte-se a nós e faça a diferença!
          </S.Span>
          <S.Btn>
            Seja um parceiro<S.Arrow src={ArrowRight} alt=""></S.Arrow>
          </S.Btn>
          <S.CardContainer>
            <S.Card>
              <S.Icon src={Rocket} alt=""></S.Icon>
              <S.Number>60%</S.Number>
              <S.ShortText>Redução de IRPJ e CSLL</S.ShortText>
            </S.Card>
            <S.Card>
              <S.Icon src={IconPeople} alt=""></S.Icon>
              <S.Number>20</S.Number>
              <S.ShortText>Estações Tech - Maranhão</S.ShortText>
            </S.Card>
            <S.Card>
              <S.Icon src={Clarity} alt=""></S.Icon>
              <S.Number>100+</S.Number>
              <S.ShortText>Alunos capacitados</S.ShortText>
            </S.Card>
          </S.CardContainer>
          <S.LawContainer>
            <S.Law>O que é a Lei do Bem?</S.Law>
            <S.LawContainerr>
              <S.Column>
                <S.LawTitle>Como funciona?</S.LawTitle>
                <S.Description>
                  Empresas que realizam P&D podem deduzir despesas relacionadas
                  a esses projetos no imposto de renda, realizando custos e
                  incentivando mais investimentos em inovação.
                </S.Description>
              </S.Column>
              <S.Column>
                <S.LawTitle>Por que surgiu?</S.LawTitle>
                <S.Description>
                  A Lei do Bem foi criada para incentivar investimentos em
                  inovação, fortalecer a economia e aumentar a competitividade
                  das empresas brasileiras.
                </S.Description>
              </S.Column>
              <S.Column>
                <S.LawTitle>Inovação</S.LawTitle>
                <S.Description>
                  Ao oferecer benefícios fiscais, a Lei do Bem impulsiona a
                  criação de novos produtos e processos, modernizando a
                  indústria e avançando a ciência e tecnologia no país.
                </S.Description>
              </S.Column>
              <S.Column>
                <S.LawTitle>Conexões</S.LawTitle>
                <S.Description>
                  A Lei do Bem facilita parcerias entre empresas, universidades
                  e centros de pesquisa, promovendo a inovação tecnológica e o
                  desenvolvimento de soluções inovadoras.
                </S.Description>
              </S.Column>
            </S.LawContainerr>
          </S.LawContainer>
        </S.HeroSection>
      </Wrapper>
    </S.Main>
  );
}
