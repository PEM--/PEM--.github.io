import styled from 'styled-components'
import { position } from 'polished'

export default styled.h1`
  position: relative;
  width: calc(100% - 60px);
  small {
    color: ${({ theme }) => theme.gray};
    display: block;
    font-weight: ${({ theme }) => theme.smallFontWeight}; 
    font-size: ${({ theme }) => theme.smallFontSize};
    font-style: italic;
    ${position('absolute', null, '-60px', 0, null)}
    text-align: right;
    width: 60px;
  }
`