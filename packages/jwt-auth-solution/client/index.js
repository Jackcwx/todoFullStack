import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './components/App'
import { Provider } from 'react-redux'

import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    /**
     * Auth0Provider is a component that has a hook that provides
     * all authorization operations
     */
    <Auth0Provider
      domain={'dev-academy-sarah.au.auth0.com'}
      clientId={'56NSPesWvy1BHcycLcoSHvuZX07Vl4ds'}
      redirectUri={window.location.origin}
      audience="https://fruits/api"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})