import React from 'react'
import { element } from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

// const Layout = ({ children, data }) => (
//   <div>
//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '0px 1.0875rem 1.45rem',
//         paddingTop: 0,
//       }}
//     >{children}</div>
//   </div>
// )

// Layout.propTypes = {
//   children: PropTypes.func,
// }

// export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
const Layout = ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    {children}
  </div>
)
Layout.propTypes = {
  children: element.isRequired
}
export default Layout