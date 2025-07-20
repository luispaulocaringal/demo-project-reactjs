import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/login', element: <Auth/> }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <Footer />
    </>
  )
}

export default App
