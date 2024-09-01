"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
  
  &::-webkit-scrollbar {
    display: none;
  }
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1rem;
    background-color: #F8F8F8;
    color: #000000;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  }

`;
