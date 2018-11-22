import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'

export default page => {
  const post = page.data.current
  return (
    <Layout>
      <Container>
        <div>
          <Link to="/posts">&lt; Back</Link>
        </div>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        {page.pageContext.previous && (
          <Link to={`post${page.pageContext.previous.fields.slug}`}>
            &lt; {page.pageContext.previous.frontmatter.title}
          </Link>
        )}
        {page.pageContext.previous && page.pageContext.next && <span> | </span>}
        {page.pageContext.next && (
          <Link to={`post${page.pageContext.next.fields.slug}`}>
            {page.pageContext.next.frontmatter.title} &gt;
          </Link>
        )}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    current: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
