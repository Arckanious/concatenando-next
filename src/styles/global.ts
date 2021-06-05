import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding:0;
    margin:0;
    vertical-align:baseline;
    list-style:none;
    border:0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    background-image: ${props => props.theme.colors.background};
  }

  @keyframes bounce{
    0%{
      transform: translateY(0);
    }
    50%{
      transform: translateY(-8px);
    }
    100%{
      transform: translateY(0px);
    }
  }
`
