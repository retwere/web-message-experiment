import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ConfirmPage from './ConfirmPage'
import MessageListener from './MessageListener'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MessageListener />} />
        <Route path="confirm" element={<ConfirmPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
