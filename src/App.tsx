import LoginPage from './pages/login';
import Home from './pages/home';
import TodoPage from './pages/todo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLoader } from './services/auth_service';
import { setNavigate } from './reducers/navigation_reducer';
import { useDispatch } from 'react-redux';
import './App.css'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  

  const router = createBrowserRouter([
    { path:'/', element: <LoginPage />},
    { path: 'home', element: <Home />, loader:AuthLoader},
    { path: 'todo', element: <TodoPage />, loader:AuthLoader}
  ])

  useEffect(() => {

    dispatch(setNavigate(router.navigate))

  }, [router, dispatch])

  

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
