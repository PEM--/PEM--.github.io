import styled from 'styled-components'
import { position, size } from 'polished'

const Main = styled.main`
  background: ${({ theme }) => theme.bgColor};
  a {
    position: relative;
    display: inline-block;
    background: transparent;
    color: ${({ theme }) => theme.secondaryColor};
    font-weight: bold;
    text-decoration: none;
    >span {
      color: inherit;
      background-color: inherit;
    }
    &::after {
      content: '';
      ${position('absolute', null, null, '0', '0')}
      ${size('1px', '100%')}
      background: ${({ theme }) => theme.secondaryColor};
      transition:
        opacity ${({ theme }) => theme.defaultTransition},
        transform ${({ theme }) => theme.defaultTransition};
      opacity: 0;
      transform: translateY(.2em);
    }
    &:hover::after {
      opacity: 1;
      transform: none;
    }
  }
`
export default Main