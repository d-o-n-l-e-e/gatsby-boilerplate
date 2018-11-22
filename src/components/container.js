import React from 'react'

import containerStyles from '../styles/container.module.scss'

const Container = ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)

export default Container
