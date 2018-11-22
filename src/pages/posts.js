import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'

const Posts = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h1 style={{ display: 'inline-block', borderBottom: '1px solid' }}>
          Posts
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <h3 stlye={{ marginBottom: '20px' }}>
                <Link to={`post${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
                <span stlye={{ color: `#bbb` }}>
                  {' '}
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          )
        })}
      </Container>
    </Layout>
  )
}

export default Posts

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
