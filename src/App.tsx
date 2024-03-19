import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ConfirmPage from './ConfirmPage'
import MessageListener from './MessageListener'
import AuthenticationGuard from './AuthenticationGuard'
import LogoutPage from './LogoutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MessageListener />} />
        <Route element={<AuthenticationGuard />}>
          <Route path="confirm" element={<ConfirmPage />} />
        </Route>
        <Route path="logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
