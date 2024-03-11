import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ConfirmPage from './ConfirmPage'
import MessageListener from './MessageListener'
import { Auth0Provider } from '@auth0/auth0-react'
import AuthenticationGuard from './AuthenticationGuard'

function App() {
  return (
    <Auth0Provider
      domain="dev-jakey-experiment.us.auth0.com"
      clientId="bZXPbfTQWl9D9E8LhtTucubUe6ng3MZs"
      authorizationParams={{
        redirect_uri: 'https://web-message-experiment.vercel.app/confirm'
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MessageListener />} />
          <Route element={<AuthenticationGuard />}>
            <Route path="confirm" element={<ConfirmPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  )
}

export default App
