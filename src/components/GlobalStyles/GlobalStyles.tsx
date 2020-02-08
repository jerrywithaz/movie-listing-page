import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * { 
    box-sizing: border-box;
  }

  html, 
  body,
  #root {
      height: 100%;
      width: 100%;
      overflow: hidden;
  }

  body {
    margin: 0px;
  }
`