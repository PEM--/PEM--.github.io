import React, { Component } from 'react'
import isString from 'lodash/isString'
import styled from 'styled-components'
import { MDXProvider } from "@mdx-js/tag"
import { any } from 'prop-types'

import ExternalLink from '../components/ExternalLink'

const PwithSemiColonRaw = styled.p`
  &.semiColon { margin-bottom: 0; }
`

class PwithSemiColon extends Component {
  static propTypes = {
    children: any
  }
  shouldComponentUpdate = () => false
  render () {
    const isEndWithSemiColon = this.props.children && isString(this.props.children) &&
      this.props.children.endsWith(':')
    return <PwithSemiColonRaw className={isEndWithSemiColon && 'semiColon'} {...this.props} />
  }
}

export default class MdxRenderer extends Component {
  static propTypes = {
    children: any.isRequired
  }
  shouldComponentUpdate = () => false
  render () {
    return <MDXProvider
      components={{
        a: ({ href, children }) => <ExternalLink href={href} text={children} />,
        p: props => <PwithSemiColon {...props} />
      }}
    >{this.props.children}</MDXProvider>
  }
}
