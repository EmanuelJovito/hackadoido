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
        <Form />
      </Wrapper>
    </S.Main>
  );
}
