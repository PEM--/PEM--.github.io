import React, { Component } from 'react'
import katex from 'katex'
import { boolean, string } from 'prop-types'

export default class Katex extends Component {
  static propTypes = {
    displayMode: boolean,
    text: string.isRequired
  }
  constructor (props) {
    super(props)
    this.content = katex.renderToString(props.text, { displayMode: props.displayMode })
  }
  shouldComponentUpdate = () => false
  render () {
    return <span dangerouslySetInnerHTML={{ __html: this.content }} />
  }
}