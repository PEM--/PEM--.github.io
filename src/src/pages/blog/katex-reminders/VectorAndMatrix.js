import React from 'react'

import Katex from '../../../components/Katex'

export default function () {
  return <Katex
    displayMode
    text={String.raw`
      \vec{v} = A \cdot \vec{x} = 
      % Matrix
      \begin{bmatrix}
        a_{1,1} & \dots & z_{m,1} \\
        \vdots  & \ddots & \vdots \\
        a_{1,n} & \dots & z_{m,n}
      \end{bmatrix}
      \cdot
      % Vector
      \begin{bmatrix}
        x_n \\
        \vdots \\
        x_n
      \end{bmatrix}
      =
      % Result vector
      \begin{bmatrix}
        v_m \\
        \vdots \\
        v_m
      \end{bmatrix}
    `}
  />
}