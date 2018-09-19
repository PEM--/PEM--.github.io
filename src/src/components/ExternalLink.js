import React, { Component } from 'react'
import { string } from 'prop-types'

export default class ExternalLink extends Component {
  static propTypes = {
    href: string.isRequired,
    text: string.isRequired
  }
  shouldComponentUpdate = () => false
  render () {
    return <a href={this.props.href} target='_blank' rel='noreferrer noopener'>{this.props.text}</a>
  }
}