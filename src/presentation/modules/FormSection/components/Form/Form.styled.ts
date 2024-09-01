"use client";

import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 64.1rem;
  padding: 4.8rem;
  box-shadow: ;
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

export const Span = styled.span`
  margin-top: -5px;
  display: flex;
  justify-content: end;
  font-size: 1.4rem;
  font-weight: 700;
`;
