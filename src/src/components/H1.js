import styled from 'styled-components'
import { position } from 'polished'

export default styled.h1`
  position: relative;
  width: calc(100% - 60px);
  small {
    color: ${({ theme }) => theme.lightGray};
    display: block;
    font-size: .4em;
    font-style: italic;
    ${position('absolute', null, '-60px', 0, null)}
    text-align: right;
    width: 60px;
  }
`