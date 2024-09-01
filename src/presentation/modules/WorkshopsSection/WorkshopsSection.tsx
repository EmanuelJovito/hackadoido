"use client";
import { Wrapper } from "@/presentation/shared/components/layout/Wrapper/Wrapper";
import * as S from "./Workshops.styled";
import  { CardWorkshop }  from "../../../components/CardWorkshop/cardWorkshops"
import  oficina1  from "@/../public/oficina1.png"
import  oficina2  from "@/../public/oficina2.png"
import  oficina3  from "@/../public/oficina3.png"


export function WorkshopsSection(){
  return(
    <S.Main>
          <Wrapper>
        <S.WhorksContent>
             <S.CardContent>
                <CardWorkshop src={oficina1}/>
                <CardWorkshop src={oficina2}/>
                <CardWorkshop src={oficina3}/>
            </S.CardContent>
         

        </S.WhorksContent>
          </Wrapper>
    </S.Main>
  )
}