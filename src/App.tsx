import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ConfirmPage from './ConfirmPage'
import MessageListener from './MessageListener'
import { Notebook, NotebookContext } from './notebook'
import { useState } from 'react'

function App() {
  const [notebook, setNotebook] = useState<Notebook | null>(null)
  return (
    <NotebookContext.Provider value={notebook}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MessageListener setNotebook={setNotebook} />} />
          <Route path="confirm" element={<ConfirmPage />} />
        </Routes>
      </BrowserRouter>
    </NotebookContext.Provider>
  )
}

export default App
