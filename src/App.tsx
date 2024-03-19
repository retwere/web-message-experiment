import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import AuthProvider from './AuthProvider'
import MessageProvider from './messages/MessageProvider'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.addEventListener("message", (event) => window.alert(event))
  }, [])

  return (
    <MessageProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </MessageProvider>
  )
}

export default App
