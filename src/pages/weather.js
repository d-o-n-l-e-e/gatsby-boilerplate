import React, { Component } from "react"
import { graphql } from "gatsby"

export const GatsbyQuery = graphql`
  {
    allThirdPartyWeather (limit: 1) {
      edges {
        node {
          id
          currently {
            time
            summary
          }
        }
      }
    }
  }
`

class Weather extends Component {
  render() {
    const {
      node: { currently }
    } = this.props.data.allThirdPartyWeather.edges[0]

    const now = new Date(currently.time * 1000)

    return (
      <>
        <div style={{ textAlign: "center", margin: "50px auto 0" }}>
          <div>
            {(currently) ? (
              <div>
                <h2>Current NYC weather: {currently.summary}</h2>
                <div>[Last updted: {`${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`}]</div>
              </div>
            ) : (<p>forcast is currently unavailable</p>)}
          </div>
        </div>
      </>
    )
  }
}
export default Weather