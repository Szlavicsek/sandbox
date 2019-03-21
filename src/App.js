import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.module.scss';
import { createGlobalStyle } from 'styled-components'
import myFont from './assets/fonts/avenirltce95black-webfont.woff2';

import Melkwegsite from './routing_and_animations/melkwegsite'

const App = _=>{

    const GlobalStyle = createGlobalStyle`
      @font-face {
        font-family: 'Avenir-Black';
        src: url(${myFont}) format('woff2');
        font-weight: bold;
        font-style: normal;
      }
    `;

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Melkwegsite />
            </BrowserRouter>
        </>
    );
};

export default App;
