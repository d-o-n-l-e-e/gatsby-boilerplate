import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Container>
      <div style={{ maxWidth: '300px', margin: '5rem auto 0' }}>
        {/* example of image using gatsby-image */}
        <Image />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
