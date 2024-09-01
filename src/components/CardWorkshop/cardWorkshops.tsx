"use client";
import * as S from "./cardWorkshops.styled";
import  oficina1  from "../../../public/oficina1.png"
import { StaticImageData } from "next/image";


type cardImg ={
  src: StaticImageData;
};

export function CardWorkshop(props: cardImg){
  return(
    <S.cardContent>
      <S.cardImage src={props.src} alt=""></S.cardImage>
    </S.cardContent>
  )
}