"use client";

import { styled } from "styled-components";
import Image from "next/image";
export const BackgroundCircle = styled(Image)`
  position: absolute;
  bottom: 100;
  left: 0;
  object-fit: cover;
  width: 100%;
  z-index: -1;
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;
export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #021850;
`;
export const Span = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: #021850;
`;

export const Container = styled.section`
  width: 100%;
`;

export const Form = styled.form`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 50.1rem;
  gap: 1.8rem;
  padding: 4.8rem;
  box-shadow: 0px 1px 8px 3px #0000002e;
  border-radius: 18px;
  background-color: white;
`;

export const Fieldset = styled.fieldset`
  border: none;
`;

export const Label = styled.label``;

export const Input = styled.input`
  height: 4.63rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-size: 1.4rem;
  padding-left: 1.7rem;
  background-color: #e6e6e6;
  color: #484848;
`;

export const Button = styled.button`
  height: 4.63rem;
  font-size: 2.037rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding-left: 1.7rem;
  background-color: #021850;
  color: white;
`;
