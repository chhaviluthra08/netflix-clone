import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function Login() {
  return <h1>Login Page</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  )
}
console.log(import.meta.env.VITE_TMDB_API_KEY)
export default App