import React from 'react'

import Katex from '../../../components/Katex'

export default function () {
  return <Katex
    displayMode
    text={String.raw`
      \vec{v} = A \cdot \vec{x} = 
      % Matrix
      \begin{bmatrix}
        a_{1,1} & … & z_{m,1} \\
        ⁝       & … & ⁝ \\
        a_{1,n} & … & z_{m,n}
      \end{bmatrix}
      \cdot
      % Vector
      \begin{bmatrix}
        x_n \\
        ⁝ \\
        x_n
      \end{bmatrix}
      =
      % Result vector
      \begin{bmatrix}
        v_m \\
        ⁝ \\
        v_m
      \end{bmatrix}
    `}
  />
}