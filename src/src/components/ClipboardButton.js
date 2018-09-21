import Clipboard from 'clipboard'
import React, { Component } from 'react'
import styled from 'styled-components'
import { bool, string } from 'prop-types'
import { position, size } from 'polished'

const Svg = styled.svg`
  display: block;
  ${size('16px')}
  path { fill: ${({ theme }) => theme.bodyColor}; }
`

class ClippySvg extends Component {
  shouldComponentUpdate = () => false
  render () {
    return (<Svg viewBox='0 0 24 24'>
      <path d='M4.2 19.2h6.4v1.6H4.2zm8-9.6h-8v1.6h8zm3.2 4.8v-3.2L10.6 16l4.8 4.8v-3.2h8v-3.2zm-7.2-1.6h-4v1.6h4zm-4 4.8h4V16h-4zm14.4 1.6h1.6v3.2c0 .5-.2.8-.5 1.1-.3.3-.6.5-1.1.5h-16c-.9 0-1.6-.7-1.6-1.6V4.8c0-.9.7-1.6 1.6-1.6h4.8C7.4 1.4 8.8 0 10.6 0c1.8 0 3.2 1.4 3.2 3.2h4.8c.9 0 1.6.7 1.6 1.6v8h-1.6V8h-16v14.4h16zM4.2 6.4H17c0-.9-.7-1.6-1.6-1.6h-1.6c-.9 0-1.6-.7-1.6-1.6 0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6 0 .9-.7 1.6-1.6 1.6H5.8c-.9 0-1.6.7-1.6 1.6z'/>
    </Svg>)
  }
}

const ClipboarButtonDiv = styled.div`
  width: 60px;
  opacity: 0;
  pointer-events: none;
  ${position('absolute', '5px', '-13px', null, null)}
  transition: opacity ${({ theme }) => theme.defaultTransition};
  &.displayed {
    opacity: 1;
    button { pointer-events: auto; }
  }
  button { pointer-events: none; }
`

const Button = styled.button`
  background: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  display: block;
  outline: 0;
  padding: 3px;
  ${position('absolute', 0, null, null, '18px')}
  ${size('24px')}
  transition:
    border-color ${({ theme }) => theme.defaultTransition},
    transform ${({ theme }) => theme.defaultTransition};
  &:hover { border-color: ${({ theme }) => theme.secondaryColor}; }
  &:active { transform: translateY(1px); }
`

const SuccessMsg = styled.div`
  background: ${({ theme }) => theme.headerColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.bgColor};
  display: inline-block;
  font-size: .7em;
  margin-top: 26px;
  padding: .25em;
  opacity: 0;
  pointer-events: none;
  text-align: droite;
  transition: opacity ${({ theme }) => theme.defaultTransition};
  width: 100%;
  &.displayed { opacity: 1; }
`

export default class ClipboarButton extends Component {
  static propTypes = {
    displayed: bool,
    to: string.isRequired
  }
  state = { displayed: false, success: false }
  timer = null
  static getDerivedStateFromProps = ({ displayed }) => ({ displayed })
  componentDidMount = () => (this.clipboard = new Clipboard('.clipboardBtn'))
  componentWillUnmount = () => {
    this.timer && clearTimeout(this.timer)
  }
  shouldComponentUpdate = ({ displayed }, { success }) =>
    this.props.displayed !== displayed ||
    this.state.success !== success
  handleClick = () => this.setState({ success: true }, () => {
    this.timer = setTimeout(() => this.setState({ success: false }), 1500)
  })
  render () {
    return (<ClipboarButtonDiv className={this.state.displayed && 'displayed'}>
      <Button
        className='clipboardBtn'
        data-clipboard-action='copy'
        data-clipboard-target={`#${this.props.to}`}
        tabIndex={-1}
        type='button'
        onClick={this.handleClick}
      ><ClippySvg /></Button>
      <SuccessMsg className={this.state.success && 'displayed'}>Copied</SuccessMsg>
    </ClipboarButtonDiv>)
  }
}