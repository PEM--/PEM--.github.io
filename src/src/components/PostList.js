import React, { Component } from 'react'
import format from 'date-fns/format'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { arrayOf, shape, string } from 'prop-types'
import { position } from 'polished'

import H1 from './H1'

const PostContainer = styled.li`
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 5px;
  transition: border-color ${({ theme }) => theme.defaultTransition};
  &:not(:first-of-type) { margin-top: 1em; }
  a {
    display: block;
    padding: 1em;
    &::after { content: none; }
  }
  .title {
    color: ${({ theme }) => theme.headerColor};
    font-size: 1.2em;
    font-family: ${({ theme }) => theme.headerFont};
    margin-bottom: .5em;
    position: relative;
    width: calc(100% - 80px);
    small {
      display: block;
      font-size: .6em;
      font-style: italic;
      font-weight: 300;
      ${position('absolute', 0, '-80px', null, null)}
      text-align: right;
    }
  }
  .description {
    color: ${({ theme }) => theme.bodyColor};
    font-size: .9em;
    font-weight: 300;
  }
  .continue {
    color: ${({ theme }) => theme.gray};
    font-size: .8em;
    font-weight: 300;
    transition: color ${({ theme }) => theme.defaultTransition};
  }
  &:active, &:hover {
    border-color: ${({ theme }) => theme.gray};
    .continue { color: ${({ theme }) => theme.secondaryColor}; }
  }
`

class Post extends Component {
  static propTypes = {
    date: string.isRequired,
    description: string.isRequired,
    slug: string.isRequired,
    title: string.isRequired
  }
  shoudComponentUpdate = () => false
  render () {
    const { date, description, slug, title } = this.props
    return (<PostContainer>
      <Link to={`blog/${slug}`}>
        <p className='title'>{title}<small>{format(date, 'DD/MM/YY')}</small></p>
        <p className='description'>{description}</p>
        <p className='continue'>Continue reading ⤅</p>
      </Link>
    </PostContainer>)
  }
}

const PostListUl = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 3em;
`

export default class PostList extends Component {
  static propTypes = {
    posts: arrayOf(shape({
      id: string.isRequired,
      // eslint-disable-next-line react/forbid-foreign-prop-types
      ...Post.propTypes
    })).isRequired
  }
  shoudComponentUpdate = () => false
  render () {
    const { posts } = this.props
    return (<nav>
      <H1>List of posts <small>{posts.length} posts</small></H1>
      <PostListUl>
        {posts.map(({ id, ...postProps }) => <Post key={id} {...postProps} />)}
      </PostListUl>
    </nav>)
  }
}
