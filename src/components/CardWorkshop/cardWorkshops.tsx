"use client";
import * as S from "./cardWorkshops.styled";
import  oficina1  from "../../../public/oficina1.png"
import { StaticImageData } from "next/image";
import seta from "../../../public/ArrowCircleUpRight.svg"
import map from "../../../public/MapPin (1).svg"
import Image from "next/image";


type card ={
  src: StaticImageData;
  title: string;
  description: string;
};

export function CardWorkshop(props: card){
  return(
    <S.cardContent>
      <S.cardImage src={props.src} alt=""></S.cardImage>
      <S.cardInfosContent>
        <S.buttonContent>
           <S.cardButton>Saiba mais
            <Image src={seta} alt="map" width={20} height={20}/>
           </S.cardButton>
        </S.buttonContent>
        
         <S.Infos>
            <S.cardTitle>{props.title}</S.cardTitle>
            <S.descriptionContent>
              <Image src={map} alt="map" width={20} height={20}/>
              <S.CardDescription>{props.description}</S.CardDescription>
            </S.descriptionContent>
            
         </S.Infos>
      </S.cardInfosContent>
    </S.cardContent>
  )
}