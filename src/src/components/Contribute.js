import React from 'react'
import styled from 'styled-components'
import { position } from 'polished'

import ExternalLink from './ExternalLink'

const ContributeContainer = styled.span`
  display: block;
  ${position('absolute', 0, 0, null, null)}
  font-size: .8em;
`

export default function Contribute ({ slug }) {
  return (<ContributeContainer>
    <ExternalLink
      href={`https://github.com/PEM--/PEM--.github.io/tree/master/src/src/pages/blog/${slug}`}
      text='Contribute on Github'
    />
  </ContributeContainer>)
}