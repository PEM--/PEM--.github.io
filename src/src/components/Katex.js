import React, { Component } from 'react'
import katex from 'katex'
import styled from 'styled-components'
import { bool, string } from 'prop-types'

const SpanWarning = styled.span`
  color: ${({ theme }) => theme.warningColor};
`

export default class Katex extends Component {
  static propTypes = {
    displayMode: bool,
    formulae: string.isRequired
  }
  shouldComponentUpdate = ({ formulae }) => this.props.formulae !== formulae
  render () {
    try {
      const __html = katex.renderToString(
        this.props.formulae,
        { displayMode: this.props.displayMode }
      )
      return <span dangerouslySetInnerHTML={{ __html }} />
    } catch (err) {
      const formattedError = err.toString()
        .replace('ParseError: KaTeX parse error: ', '')
      return <SpanWarning>{formattedError}</SpanWarning>
    }
  }
}