import React, { Component } from 'react'
import katex from 'katex'
import { bool, string } from 'prop-types'

export default class Katex extends Component {
  static propTypes = {
    displayMode: bool,
    formulae: string.isRequired
  }
  shouldComponentUpdate = ({ formulae }) => this.props.formulae !== formulae
  render () {
    const __html = katex.renderToString(
      this.props.formulae,
      { displayMode: this.props.displayMode }
    )
    return <span dangerouslySetInnerHTML={{ __html }} />
  }
}