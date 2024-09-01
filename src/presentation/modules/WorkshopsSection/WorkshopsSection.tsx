"use client";
import { Wrapper } from "@/presentation/shared/components/layout/Wrapper/Wrapper";
import * as S from "./Workshops.styled";
import  { CardWorkshop }  from "../../../components/CardWorkshop/cardWorkshops"
import  oficina1  from "@/../public/oficina1.png"
import  oficina2  from "@/../public/oficina2.png"
import  oficina3  from "@/../public/oficina3.png"
import background from "../../../../public/section-timeline.png"


export function WorkshopsSection(){
  return(
    <S.Main>
      {/* <S.backgroundImg src={background} alt="background" /> */}
         <Wrapper>
        <S.WhorksContent>
          <S.Title>Oficinas de Inovação</S.Title>
             <S.CardContent>
                <CardWorkshop src={oficina1} title="Oficina de Robôtica" description="Estação Tech - João de Deus"/>
                <CardWorkshop src={oficina2} title="Oficina de Manicure" description="Estação Tech - Bacanga"/>
                <CardWorkshop src={oficina3} title="Oficina de Culinária" description="Estação Tech - Sol e Mar"/>
            </S.CardContent>
        </S.WhorksContent>
          </Wrapper>
      
         
    </S.Main>
  )
}