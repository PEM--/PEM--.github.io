import React, { Component } from 'react'
import styled from 'styled-components'
import { position } from 'polished'
import { string } from 'prop-types'

import ExternalLink from './ExternalLink'

const ContributeContainer = styled.span`
  display: block;
  ${position('absolute', 0, 0, null, null)}
  font-size: .8em;
`

export default class Contribute extends Component {
  static propTypes = {
    href: string.isRequired,
    text: string.isRequired
  }
  shouldComponentUpdate = () => false
  render () {
    return (<ContributeContainer>
      <ExternalLink
        href={`https://github.com/PEM--/PEM--.github.io/tree/master/src/src/pages/blog/${this.props.slug}`}
        text='Contribute on Github'
      />
    </ContributeContainer>)
  }
}