"use client";
import * as S from "./FormsSection.styled";
import { Form } from "./components/Form/Form";
import { Wrapper } from "@/presentation/shared/components/layout/Wrapper/Wrapper";
import Efect from "@/../public/effects (1).svg";
export function FormSection() {
  return (
    <S.Main>
      <Wrapper>
        <S.BackgroundCircle src={Efect} alt="" />
        <S.Container>
          <S.TextContainer>
            <S.TitleContainer>
              Quer aproveitar os benefícios da Lei do Bem e apoiar a Estação
              Tech?
            </S.TitleContainer>
            <S.Text>
              Torne-se um parceiro das Estações Tech e ajude a moldar o futuro
              da inovação no Maranhão. Contribua para capacitar comunidades e
              transformar o potencial local em realidade. Colabore com um
              projeto essencial e faça a diferença no desenvolvimento
              tecnológico regional.
            </S.Text>
          </S.TextContainer>
          <Form />
        </S.Container>
      </Wrapper>
    </S.Main>
  );
}
