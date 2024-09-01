import { ReactNode } from 'react'

import * as S from './Wrapper.styled'

type Props = {
  children: ReactNode
}

export function Wrapper({ children }: Props) {
  return <S.Container>{children}</S.Container>
}
