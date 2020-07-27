import React, { Component } from 'react'
import HomeLoadingFooter from './HomeLoading'

interface Props {
  
}
interface State {
  
}

class FooterBar extends Component<Props, State> {
  state = {}

  render() {
    return (
      <footer>
        <HomeLoadingFooter />
      </footer>
    )
  }
}

export default FooterBar
