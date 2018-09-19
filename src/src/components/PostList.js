import React, { Component } from 'react'
import dateFns from 'date-fns'
import { Link } from 'gatsby'
import { arrayOf, shape, string } from 'prop-types'

export default class PostList extends Component {
  static propTypes = {
    posts: arrayOf(shape({
      date: string.isRequired,
      description: string.isRequired,
      id: string.isRequired,
      slug: string.isRequired,
      title: string.isRequired
    })).isRequired
  }
  shoudComponentUpdate = () => false
  render () {
    return (<nav>
      <ul>
        {this.props.posts.map(({ date, description, id, slug, title }) => (<li key={id}>
          <Link to={`blog/${slug}`}><p>{title} - {dateFns.format(date, 'DD/MM/YY')}</p></Link>
        </li>))}
      </ul>
    </nav>)
  }
}
