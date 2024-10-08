"use client";

import { styled } from "styled-components";

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
  margin-top: 20rem;
  right: 2;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 50.1rem;
  gap: 1.8rem;
  padding: 4.8rem;
  box-shadow: 0px 1px 8px 3px #0000002e;
  border-radius: 18px;
  background-color: white;
  @media (max-width: 768px) {
    width: 33rem;
  }
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
