import styled from 'styled-components'
import sharedStyles from './sharedStyles'

const Path = styled.path`
  ${({ theme }) => sharedStyles(theme)}
`
export default Path