import React, { Component } from 'react'
import Home from './components/Home'
import styles from './index.less'

interface Props { }
interface State { }

class App extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={styles.wrapper}>
        <Home />
      </div>
    )
  }
}

export default App
