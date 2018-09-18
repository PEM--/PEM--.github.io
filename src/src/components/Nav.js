import React from 'react'
import styled from 'styled-components'
import { Link } from  'gatsby'
import { position, size } from 'polished'

import typography from '../themes/typography'

console.log('typography', typography)

const NavTag = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`

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
  &::before {
    content: '';
    display: block;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.lightGray},
      transparent
    );
    ${position('absolute', 0, null, null, null)}
    ${size('1px', '100%')}
  }
  >li, a {
    color: ${({ theme }) => theme.gray};
    font-family: ${({ theme }) => theme.headerFont};
    font-size: 14px;
    margin: 0;
    padding: 1em 0;
    text-transform: uppercase;
    transition: color ${({ theme }) => theme.defaultTransition};
    &:not(:first-child) { margin-left: 1em; }
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
      ${position('absolute', '10px', '-1em', null, null)}
      ${size('10px')}
    }
    &:hover, &:active {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }
`

export default function Nav ({ title }) {
  return (<NavTag>
    <Header>
      <HomeLink to='/'><h1>{title}</h1></HomeLink>
      <LinkList>
        <li><Link to='/about'>About</Link></li>
      </LinkList>
    </Header>
  </NavTag>)
}