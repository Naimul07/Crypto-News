import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Cryptonews from './pages/Cryptonews.jsx'
import Cryptodetails from './pages/Cryptodetails.jsx'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cryptonews />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
