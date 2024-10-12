import LoginPage from './pages/login';
import Home from './pages/home';
import TodoPage from './pages/todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes for each component */}
        <Route index element={<LoginPage />} />
        <Route path="home" element={<Home />} />
        <Route path="todo" element={<TodoPage />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
