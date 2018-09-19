import React, { Component } from 'react'
import styled from 'styled-components'
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'
import { size } from 'polished'
import { string } from 'prop-types'

const ShareIconBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0;
  position: relative;
  &::before, &::after {
    content: '';
    display: block;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.lightGray},
      transparent
    );
    position: absolute;
    ${size('1px', '100%')}
  }
  &::before { top: -1em; }
  &::after { bottom: -1em; }
  >* {
    cursor: pointer;
    flex: 0 0 auto;
    outline: 0;
    &:not(:first-of-type) { margin-left: 1.5em; }
  }
`

export default class ShareIconBar extends Component {
  static shareIconProps = { round: true, size: 32 }
  static propTypes = {
    href: string.isRequired,
    title: string.isRequired
  }
  shouldComponentUpdate = ({ href, title }) =>
    this.props.href !== href ||
    this.props.title !== title
  render () {
    const shareButtonProps = { url: this.props.href }
    return (<ShareIconBarContainer>
      <TwitterShareButton title={this.props.title} {...shareButtonProps}>
        <TwitterIcon {...ShareIconBar.shareIconProps} />
      </TwitterShareButton>
      <LinkedinShareButton title={this.props.title} {...shareButtonProps}>
        <LinkedinIcon {...ShareIconBar.shareIconProps} />
      </LinkedinShareButton>
      <EmailShareButton subject={this.props.title} {...shareButtonProps}>
        <EmailIcon {...ShareIconBar.shareIconProps} />
      </EmailShareButton>
    </ShareIconBarContainer>)
  }
}