import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { ThemeProvider } from 'styled-components'
import { AppContainer } from 'react-hot-loader'

import App from './components/App'
import history from './history'
import store from './redux/store'
import theme from './theme'

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Route component={App} />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) module.hot.accept()
