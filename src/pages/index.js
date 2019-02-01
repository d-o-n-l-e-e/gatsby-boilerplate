import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Container from '../components/container'
import Image from '../components/image'

import { connect } from "react-redux"

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


const IndexPage = () => (
  <Layout>
    <Container>
      <div style={{ maxWidth: '300px', margin: '5rem auto 0' }}>
        {/* example of image using gatsby-image */}
        <Image />
      </div>
      <ConnectedCounter />
    </Container>
  </Layout>
)

export default IndexPage
