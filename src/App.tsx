import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import AuthProvider from './AuthProvider'
import MessageProvider from './messages/MessageProvider'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (!origin.startsWith('https://') || !origin.endsWith('-colab.googleusercontent.com')) {
        return
      }
      window.alert(JSON.stringify(event.data))
    })
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
