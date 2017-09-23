import React, { PureComponent } from 'react'
import styled from 'styled-components'

import {
  Footer,
  Header,
  Page
} from '@organisms'

const Main = styled.main``

class App extends PureComponent {
  render () {
    return <Main>
      <Header />
      <Page />
      <Footer />
    </Main>
  }
}

export default App
