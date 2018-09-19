import React from 'react'
import styled from 'styled-components'
import { Link } from  'gatsby'
import { position, size } from 'polished'

const Header = styled.header`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth}px;
  a { text-decoration: none; }
`

const LinkList = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  text-align: right;
  position: relative;
  white-space: nowrap;
  width: 100%;
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
  &::before { top: 0; }
  &::after { bottom: 0; }
  >li {
    display: inline-block;
    margin: 0;
    padding: 1em 0;
    &:not(:first-child) { margin-left: 1em; }
  }
  a {
    color: ${({ theme }) => theme.gray};
    font-family: ${({ theme }) => theme.headerFont};
    font-size: 14px;
    text-transform: uppercase;
    transition: color ${({ theme }) => theme.defaultTransition};
    &:hover, &:active {
      color: ${({ theme }) => theme.headerColor};
    }
  }
`

const HomeLink = styled(Link)`
  display: block;
  text-align: center;
  h1 {
    display: inline-block;
    margin: .5em;
    font-weight: 900;
    font-size: 22px;
    letter-spacing: 1px;
    position: relative;
    transition: color ${({ theme }) => theme.defaultTransition};
    &::after {
      content: '';
      border-radius: 50%;
      display: block;
      background: ${({ theme }) => theme.secondaryColor};
      ${position('absolute', '8px', '-1em', null, null)}
      ${size('10px')}
    }
    &:hover, &:active {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }
`

export default function Nav ({ title }) {
  return (<nav>
    <Header>
      <HomeLink to='/'><h1>{title}</h1></HomeLink>
      <LinkList>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </LinkList>
    </Header>
  </nav>)
}