import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { ThemeProvider } from 'styled-components'

import App from './components/App'
import history from './history'
import store from './redux/store'
import theme from './theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Route component={App} />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)

if (module.hot) module.hot.accept()
