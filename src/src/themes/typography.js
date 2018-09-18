import Typography from 'typography'
import lawtonTheme from 'typography-theme-lawton'
import omit from 'lodash/omit'
import theme from '.'

// More info here:
// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-lawton/src/index.js
const modifiedTheme = {
  ...omit(lawtonTheme, 'overrideStyles'),
  headerFontFamily: theme.headerFont.replace(/'/g, '').split(','),
  headerWeight: 500,
  headerColor: theme.headerColor,
  bodyColor: theme.bodyColor
}
const typography = new Typography(modifiedTheme)

export default typography