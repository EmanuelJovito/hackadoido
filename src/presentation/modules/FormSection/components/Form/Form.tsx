import * as S from "./Form.styled";

export function Form() {
  return (
    <S.Container>
      <S.Form>
        <S.Title>Preencha o formulario</S.Title>
        <S.Span>seja um apoiador</S.Span>
        <S.Fieldset>
          <S.Input
            placeholder="Nome do responsável"
            type="text"
            name="name"
            id="name"
          />
        </S.Fieldset>
        <S.Fieldset>
          <S.Input placeholder="E-mail" type="email" name="email" id="email" />
        </S.Fieldset>
        <S.Fieldset>
          <S.Input
            placeholder="Número do Telefone"
            type="number"
            name="email"
            id="email"
          />
        </S.Fieldset>
        <S.Fieldset>
          <S.Input placeholder="CNPJ" type="text" name="email" id="email" />
        </S.Fieldset>
        <S.Fieldset>
          <S.Input
            placeholder="Nome da empresa"
            type="text"
            name="email"
            id="email"
          />
        </S.Fieldset>
        <S.Button>Enviar</S.Button>
      </S.Form>
    </S.Container>
  );
}
