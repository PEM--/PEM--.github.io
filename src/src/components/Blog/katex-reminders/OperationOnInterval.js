import React from 'react'

import Katex from '../../../components/Katex'

export default function () {
  return <Katex
    displayMode
    formulae={String.raw`
      \begin{aligned}
        S_n &= \sum_{n\in\N} a^n \\
            &= 1 + a + a^2 + \dots + a^n \\
            &= \cfrac{1 - a^{n+1}}{1 - a}
      \end{aligned}
    `}
  />
}