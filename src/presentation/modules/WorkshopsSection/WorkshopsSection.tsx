"use client";
import { Wrapper } from "@/presentation/shared/components/layout/Wrapper/Wrapper";
import * as S from "./Workshops.styled";
import  { CardWorkshop }  from "../../../components/CardWorkshop/cardWorkshops"

export function WorkshopsSection(){
  return(
    <S.Main>
        <S.WhorksContent>
          <CardWorkshop />
        </S.WhorksContent>
    </S.Main>
  )
}