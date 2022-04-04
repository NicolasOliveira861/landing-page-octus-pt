/* eslint-disable prettier/prettier */
import { createGlobalStyle } from "styled-components";

import { Colors, Fonts } from "styles/variables";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${Colors.white};
    color: ${Colors.black};
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    

    /* @keyframes BouncingArrow {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-20px);
    }
    50% {
      transform: scale(1, 1) translateY(0);
    }
    60% {
      transform: scale(1, 1) translateY(-15px);
    }
    80% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  } */

  /* @keyframes Bounce {
    0% {
      transform:  translateY(0);
    }
    10% {
      transform: translateY(0);
    }
    30% {
      transform:  translateY(-20px);
    }
    50% {
      transform:  translateY(0);
    }
    60% {
      transform:  translateY(-15px);
    }
    80% {
      transform:  translateY(0);
    }
    100% {
      transform:  translateY(0);
    }
  } */

        /* width */
    ::-webkit-scrollbar {
      /* width: 5px; */
      display: none;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(22, 151, 193, 0.60);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }

  body,input,button {
    font-family: ${Fonts.inter};
    font-weight: 500;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight:500;
  }

  button{
    cursor:pointer;
    border: none;
    box-shadow: none;
    background: none;
  }

  input,
  textarea,
  button,
  select,
  a,
  Link {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-decoration: none;
    color: ${Colors.black};
  }

`;
