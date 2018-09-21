import React, { Component } from 'react'
import isString from 'lodash/isString'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import { any } from 'prop-types'
import { position } from 'polished'

import ExternalLink from '../components/ExternalLink'

const Blockquote = styled.blockquote`
  border-left: 1px solid ${({ theme }) => theme.lightGray};
  margin-left: 1.5em;
  padding-left: 1em;
  position: relative;
  &::before {
    content: '➸';
    color: ${({ theme }) => theme.secondaryColor};
    display: block;
    font-size: 1.2em;
    ${position('absolute', 0, null, null, '-1.5em')}
  }
`

const PwithSemiColonRaw = styled.p`
  text-align: justify;
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
        blockquote: props => <Blockquote {...props} />,
        p: props => <PwithSemiColon {...props} />
      }}
    >{this.props.children}</MDXProvider>
  }
}
