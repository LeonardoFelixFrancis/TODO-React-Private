import LoginPage from './pages/login';
import Home from './pages/home';
import TodoPage from './pages/todo';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem('token')

    if (token == null){
      setIsAuthenticated(false);
    }else{
      setIsAuthenticated(true);
    }

  })


  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes for each component */}
        <Route index element={isAuthenticated ? <Navigate to={'/home'} replace /> : <LoginPage />} />
        <Route path="home" element={<Home />} />
        <Route path="todo" element={<TodoPage />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
