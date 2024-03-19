import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import AuthProvider from './AuthProvider'
import MessageProvider from './messages/MessageProvider'

function App() {
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
