import styled, { createGlobalStyle } from 'styled-components'

export const Title = styled.h1`
    text-align: center;
    margin: 10px;
`

export const SubTitle = styled.h6`
    display: inline;
    margin: 10px;
`

export const Center = styled.div`
    margin: auto;
    text-align: center;
    padding: 10px;
`

export const Link = styled.a`
  text-decoration: none;
  color: white;
`

export const GlobalStyle = createGlobalStyle`
    a:hover{
        color: grey;
    }
    body{
        font-family: 'Roboto Mono', monospace;
        background-color: #1C1C1C;
        color: white;
    }
`