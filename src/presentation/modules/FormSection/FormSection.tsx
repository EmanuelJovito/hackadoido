"use client";
import * as S from "./FormsSection.styled";
import { Form } from "./components/Form/Form";
import { Wrapper } from "@/presentation/shared/components/layout/Wrapper/Wrapper";
export function FormSection() {
  return (
    <S.Main>
      <Wrapper>
        <Form />
      </Wrapper>
    </S.Main>
  );
}
