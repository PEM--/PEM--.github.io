import React, { Component } from 'react'
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine } from 'victory'
import styled from 'styled-components'
import theme from '../../../themes'
import { fixedFlowting8decimals } from '../../../utils/math'
import { number } from 'prop-types'

const GraphEq2dDiv = styled.div`
  margin: 0 auto 1em;
  max-width: 400px;
  .VictoryContainer {
    border: 1px solid ${({ theme }) => theme.lightGray};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`

export default class GraphEq2d extends Component {
  static labelStyle = { fill: theme.bodyColor, fontFamily: theme.headerFont, fontSize: 15 }
  static axisStyle = {
    axis: { stroke: theme.bodyColor },
    axisLabel: { ...GraphEq2d.labelStyle, padding: 30 },
    grid: { stroke: theme.lightGray },
    ticks: { stroke: theme.gray, size: 5 },
    tickLabels: { ...GraphEq2d.labelStyle, fill: theme.gray, fontSize: 10, padding: 5 }
  }
  static svgPadding = 30
  constructor (props) {
    super(props)
    this.height = GraphEq2d.svgPadding * 2 + 3 * 100
    this.width = GraphEq2d.svgPadding * 2 + 22 * 10
    this.data = Array.from(Array(23), (_, idx) => {
      const x = -1.1 + idx * 0.1
      return { x, y: Math.exp(x) }
    })
  }
  shouldComponentUpdate = () => false
  render () {
    return (<GraphEq2dDiv>
      <VictoryChart
        domain={{ x: [-1.1, 1.1], y: [0, Math.exp(1.1)] }}
        height={this.height}
        padding={GraphEq2d.svgPadding}
        width={this.width}
      >
        <VictoryAxis
          label='x'
          style={GraphEq2d.axisStyle}
        />
        <VictoryAxis
          dependentAxis
          label='y = exp(x)'
          style={GraphEq2d.axisStyle}
        />
        <VictoryLine
          style={{ data: { stroke: theme.secondaryColor, strokeWidth: '2px' } }}
          data={this.data}
        />
        <VictoryLabel
          datum={{ x: 0.9, y: Math.exp(1) }}
          style={GraphEq2d.axisStyle.axisLabel}
          text={`e ≃ ${fixedFlowting8decimals(Math.exp(1))}`}
          textAnchor='end'
        />
      </VictoryChart>
    </GraphEq2dDiv>)
  }
}