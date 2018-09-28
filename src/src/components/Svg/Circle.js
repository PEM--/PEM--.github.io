import styled from 'styled-components'
import sharedStyles from './sharedStyles'

const Circle = styled.circle`
  ${({ theme }) => sharedStyles(theme)}
`
export default Circle