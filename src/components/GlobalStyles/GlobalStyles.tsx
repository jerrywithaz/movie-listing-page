import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * { 
    box-sizing: border-box;
  }

  html, 
  body,
  #root {
      width: 100%;
  }

  body {
    margin: 0px;
    font-family: ${props => props.theme.typography.fontFamily.primary};
    background: ${props => props.theme.palette.gray.primary};
  }
`