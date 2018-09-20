import { createGlobalStyle } from 'styled-components'

import prism from './prism'

const GlobalStyle = createGlobalStyle /* css */ `
  html, body, #___gatsby, #___gatsby>div {
    height: 100%;
  }
  div > p > .gatsby-resp-image-link {
    pointer-events: none;
    .gatsby-resp-image-wrapper {
      border: 1px solid ${({ theme }) => theme.lightGray};
      border-radius: ${({ theme }) => theme.borderRadius};
      max-width: 100% !important;
      overflow: hidden;
    }
  }
  .katex-display { margin: 0 0 .5em; }
  main .gatsby-highlight {
    ${({ theme }) => prism(theme)}
  }
`
export default GlobalStyle
