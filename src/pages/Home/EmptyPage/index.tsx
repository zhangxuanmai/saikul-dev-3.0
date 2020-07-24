import React, { Component } from 'react'
import Home from './components/Home'
import HeaderBar from './components/Header'
import styles from './index.less'

interface Props { }
interface State { }

class App extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={styles.block}>
        <HeaderBar />
        <Home />
      </div>
    )
  }
}

export default App
