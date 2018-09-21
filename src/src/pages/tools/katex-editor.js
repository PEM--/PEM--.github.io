import React, { Component, Fragment } from 'react'
import TextareaRaw from 'react-textarea-autosize'
import styled from 'styled-components'
import { object } from 'prop-types'

import ClipboardButton from '../../components/ClipboardButton'
import Katex from '../../components/Katex'
import Layout from '../../components/Layout'
import ShareIconBar from '../../components/ShareIconBar'

export const title = 'Katex editor'

const TextareaDiv = styled.div`
  position: relative;
`

const Textarea = styled(TextareaRaw)`
  background: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.monospaceFont};
  font-size: .8em;
  outline: 0;
  padding: 1em;
  width: 100%;
  transition:
    background-color ${({ theme }) => theme.defaultTransition},
    border-color ${({ theme }) => theme.defaultTransition};
  &:focus {
    background-color: ${({ theme }) => theme.lightGray};
    border-color: ${({ theme }) => theme.secondaryColor};
  }
`

class KatexEditor extends Component {
  static defaultFormulae = String.raw`\begin{aligned}
  S_n &= \sum_{n\in\N} a^n \\
      &= 1 + a + a^2 + \dots + a^n \\
      &= \cfrac{1 - a^{n+1}}{1 - a}
\end{aligned}`
  static textareaId = 'katexEditor'
  state = {
    clipboardDisplayed: false,
    formulae: KatexEditor.defaultFormulae
  }
  shouldComponentUpdate = (_, { clipboardDisplayed, formulae }) =>
    this.state.clipboardDisplayed !== clipboardDisplayed ||
    this.state.formulae !== formulae
  handleChange = e => this.setState({ formulae: e.target.value })
  hideClipboard = () => this.setState({ clipboardDisplayed: false })
  showClipboard = () => this.setState({ clipboardDisplayed: true })
  render () {
    const { clipboardDisplayed, formulae } = this.state
    return (<div>
      <p style={{ marginBottom: 0 }}>Enter your Katex formulae:</p>
      <TextareaDiv onMouseEnter={this.showClipboard} onMouseLeave={this.hideClipboard}>
        <Textarea
          autoFocus
          id={KatexEditor.textareaId}
          onChange={this.handleChange}
          spellCheck={false}
          value={formulae}
        />
        <ClipboardButton displayed={clipboardDisplayed} to={KatexEditor.textareaId} />
      </TextareaDiv>
      <p style={{ marginBottom: 0, marginTom: '1em' }}>Results:</p>
      <p className='center'><Katex formulae={formulae}/></p>
    </div>)
  }
}

export default class KatexEditorPage extends Component {
  static propTypes = {
    location: object.isRequired
  }
  shouldComponentUpdate = () => false
  render () {
    return (<Layout title={title}>
      {({ siteMetadata }) => (<Fragment>
        <h1>{title}</h1>
        <KatexEditor />
        <ShareIconBar href={this.props.location.href} title={`${siteMetadata.title}: ${title}`}/>
      </Fragment>)}
    </Layout>)
  }
}
