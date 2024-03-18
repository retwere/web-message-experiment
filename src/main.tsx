import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jakey-experiment.us.auth0.com"
      clientId="bZXPbfTQWl9D9E8LhtTucubUe6ng3MZs"
      authorizationParams={{redirect_uri: 'https://web-message-experiment.vercel.app/confirm'}}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
