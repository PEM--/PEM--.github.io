import React from 'react'

import Katex from '../../../components/Katex'

export default function () {
  return <Katex
    displayMode
    formulae={String.raw`
      \forall~x \in \reals, \exist ~a ~and~ b \in \N ~where~
      x = \begin{cases}
        a < x \\
        x < b
      \end{cases}
    `}
  />
}