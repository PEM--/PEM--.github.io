import React, { Component } from 'react'
import ReactPlayerRaw from 'react-player'
import styled from 'styled-components'
import { position } from 'polished'
import { string } from 'prop-types'

import noUpdate from '../hoc/noUpdate'

const PlayerWrapper = noUpdate(styled.div`
  text-align: center;
  .maximized {
    display: inline-block;
    max-width: 600px;
    width: 100%;
  }
  .centered {
    position: relative;
    padding-top: 56.25%;
    width: 100%;
  }
  .reactPlayer {
    ${position('absolute', 0, null, null, 0)}
  }
`)

const ReactPlayer = noUpdate(ReactPlayerRaw)

export default class Player extends Component {
  static propTypes = {
    url: string.isRequired,
    type: string
  }
  static defaultProps = {
    type: 'https://www.youtube.com/watch?v='
  }
  shouldComponentUpdate = () => false
  render () {
    const fullUrl = `${this.props.type}${this.props.url}`
    return (<PlayerWrapper>
      <div className='maximized'>
        <div className='centered'>
          <ReactPlayer className='reactPlayer' height='100%' url={fullUrl} width='100%' />
        </div>
      </div>
    </PlayerWrapper>)
  }
}
