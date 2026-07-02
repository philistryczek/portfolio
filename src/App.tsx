import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import LegalPage from './pages/LegalPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legal" element={<LegalPage />} />
    </Routes>
  )
}
