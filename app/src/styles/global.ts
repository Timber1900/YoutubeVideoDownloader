import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: var(--white);
    font-family: Roboto;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: var(--black);
  }

  &::-webkit-scrollbar {
    background-color: #181a1b;
    width: 8px;
    margin: 0 auto;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }

  button {
    appearance: button;
    text-rendering: auto;
    color: var(--white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: var(--dark-grey);
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Roboto;
    padding: 1px 6px;
    border-radius: 2px;
    margin: 2px;
    border: none;
  }

  button:hover {
    background-color: var(--regular-grey);
  }

  button:active {
    background-color: var(--light-grey);
  }

  button:focus {
    outline: none;
  }

  select {
    appearance: button;
    text-rendering: auto;
    color: var(--white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: var(--dark-grey);
    box-sizing: border-box;
    font: 400 13.3333px Roboto;
    padding: 1px 6px;
    border-radius: 2px;
    margin: 2px;
    border: none;
  }

  select:hover {
    background-color: var(--regular-grey);
  }

  select:active {
    background-color: var(--light-grey);
  }

  select:focus {
    outline: none;
    background-color: var(--dark-grey);
  }


  html {
    width: 100vw;
    height: 100vh;
  }

  body {
    background-color: var(--black);
    overflow: hidden;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  :root {
    --white: #e8e6e3;
    --almost-white: #CED4DA;
    --light-grey: #ADB5BD;
    --regular-grey: #6C757D;
    --dark-grey: #495057;
    --almost-black: #343A40;
    --black: #212529;
    --blue: #48cae4;
  }
`;
