import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <div
        style={{
          maxWidth: '300px',
          margin: '5rem auto 0',
          textAlign: 'center',
        }}
      >
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
