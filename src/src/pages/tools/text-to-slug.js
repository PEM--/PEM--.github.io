import React, { Component, Fragment } from 'react'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import { object } from 'prop-types'

import Layout from '../../components/Layout'
import ShareIconBar from '../../components/ShareIconBar'

export const title = 'Text to slug'

const Input = styled.input`
  background: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: .8em;
  margin-bottom: 1em;
  padding: .5em 1em;
  outline: 0;
  width: 100%;
  transition:
    background-color ${({ theme }) => theme.defaultTransition},
    border-color ${({ theme }) => theme.defaultTransition};
  &:focus {
    background-color: ${({ theme }) => theme.lightGray};
    border-color: ${({ theme }) => theme.secondaryColor};
  }
`

const Presults = styled.p`
  font-family: ${({ theme }) => theme.monospaceFont};
  font-weight: bold;
`

class TextToSlug extends Component {
  static defaultText = 'Some nice title'
  state = {
    text: TextToSlug.defaultText
  }
  shouldComponentUpdate = (_, { text }) => this.state.text !== text
  handleChange = e => this.setState({ text: e.target.value })
  render () {
    const { text } = this.state
    return (<div>
      <p style={{ marginBottom: 0 }}>Enter your text:</p>
      <Input autoFocus spellCheck onChange={this.handleChange} value={text} />
      <p style={{ marginBottom: 0, marginTom: '1em' }}>Results:</p>
      <Presults className='center'>{kebabCase(text)}</Presults>
    </div>)
  }
}

export default class TextToSlugPage extends Component {
  static propTypes = {
    location: object.isRequired
  }
  shouldComponentUpdate = () => false
  render () {
    return (<Layout title={title}>
      {({ siteMetadata }) => (<Fragment>
        <h1>{title}</h1>
        <TextToSlug />
        <ShareIconBar
          href={this.props.location.href}
          title={`${siteMetadata.title}: ${title}`}
        />
      </Fragment>)}
    </Layout>)
  }
}
