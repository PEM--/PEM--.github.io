import React, { Component } from 'react'
import katex from 'katex'

export default class Katex extends Component {
  constructor (props) {
    super(props)
    this.content = katex.renderToString(props.text)
  }
  shouldComponentUpdate = () => false
  render () {
    return <span dangerouslySetInnerHTML={{ __html: this.content }} />
  }
}