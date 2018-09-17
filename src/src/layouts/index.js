import React from 'react'
import styled from 'styled-components'
import { element } from 'prop-types'
import Helmet from 'react-helmet'

import Main from '../components/main'

// import Header from '../components/header'

// const Layout = ({ children, data }) => (
//   <div>
//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header siteTitle={data.site.siteMetadata.title} />
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '0px 1.0875rem 1.45rem',
//         paddingTop: 0,
//       }}
//     >
//       {children()}
//     </div>
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


const LayoutDiv = styled.div`
  margin: 1em auto;
  width: 960px;
`

const Layout = ({ children }) => (<Main>
  {/* <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' },
    ]}
  /> */}
  <LayoutDiv>{children}</LayoutDiv>
</Main>)
Layout.propTypes = {
  childre: element.isRequired
}
export default Layout