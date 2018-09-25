export const fixedFlowtingDecimals = (nbDecimal) => {
  const pow10 = Math.pow(10, nbDecimal)
  return value => Math.floor(value * pow10) / pow10
}

export const fixedFlowting8decimals = fixedFlowtingDecimals(8)
