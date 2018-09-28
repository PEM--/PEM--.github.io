import React from 'react'
import { number } from 'prop-types'

const Svg = ({ height, width, ...props }) => <svg viewBox={`0 0 ${width} ${height}`} {...props} />
Svg.propTypes = {
  height: number,
  width: number
}
Svg.defaultProps = {
  height: 200,
  width: 960
}
export default Svg