import React from 'react'

import Katex from '../../../components/Katex'

export default function () {
  return <Katex
    displayMode
    formulae='\underbrace{a \cdot x^2 + b \cdot x + c}_{\text{Polynomial expression}}'
  />
}