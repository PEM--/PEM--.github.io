import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle /* css */ `
  html, body, #___gatsby, #___gatsby>div {
    height: 100%;
  }
  div > p > .gatsby-resp-image-link {
    pointer-events: none;
    .gatsby-resp-image-wrapper {
      border: 1px solid ${({ theme }) => theme.lightGray};
      border-radius: 5px;
      max-width: 100% !important;
      overflow: hidden;
    }
  }
  .katex-display { margin: 0 0 .5em; }
`
export default GlobalStyle
