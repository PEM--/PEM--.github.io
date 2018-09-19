const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allMdx {
          edges {
            node {
              id
              tableOfContents
              parent {
                ... on File {
                  absolutePath
                  name
                  sourceInstanceName
                }
              }
              code {
                body
                raw
                scope
              }
              frontmatter {
                title
                description
                date
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) reject(result.errors)
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/BlogPost.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      // result.data.allMdx.edges.forEach(({ node }) => {
      //   createPage({
      //     path: `/${node.parent.sourceInstanceName}/${node.parent.name}`,
      //     component: componentWithMDXScope(
      //       path.resolve('./src/templates/MdxBlogPost.js'),
      //       node.code.scope,
      //       __dirname
      //     ),
      //     context: {
      //       absPath: node.parent.absolutePath,
      //       tableOfContents: node.tableOfContents,
      //       id: node.id,
      //       ...node.code
      //     }
      //   })
      // })
      resolve()
    })
  })
}