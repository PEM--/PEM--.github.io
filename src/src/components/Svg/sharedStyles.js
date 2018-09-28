const sharedStyles = theme => /* css */ `
  stroke: ${theme.headerColor};
  stroke-width: 1px;
  fill: none;
  &.red { fill: ${theme.secondaryColor}; }
  &.white { fill: ${theme.bgColor}; }
`
export default sharedStyles