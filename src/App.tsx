import LoginPage from './pages/login';
import Home from './pages/home';
import TodoPage from './pages/todo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLoader } from './services/auth_service';
import './App.css'

function App() {

  const router = createBrowserRouter([
    { path:'/', element: <LoginPage />},
    { path: 'home', element: <Home />, loader:AuthLoader},
    { path: 'todo', element: <TodoPage />, loader:AuthLoader}
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
