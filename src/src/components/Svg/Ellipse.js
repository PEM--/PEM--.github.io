import styled from 'styled-components'
import sharedStyles from './sharedStyles'

const Ellipse = styled.ellipse`
  ${({ theme }) => sharedStyles(theme)}
`
export default Ellipse