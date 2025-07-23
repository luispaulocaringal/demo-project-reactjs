import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

import RootLayout from './pages/RootLayout/RootLayout';
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';
import Finance from './pages/Finance/Finance';
import Marketing from './pages/Marketing/Marketing';
import Insight from './pages/Insight/Insight';
import Content from './pages/Content/Content';
import Profile from './pages/Profile/Profile';
import Setting from './pages/Setting/Setting';
import Error from './pages/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/contact', element: <Contact/> },
      { path: '/finance', element: <Finance/> },
      { path: '/marketing', element: <Marketing/> },
      { path: '/insight', element: <Insight/> },
      { path: '/content', element: <Content/> },
      { path: '/profile', element: <Profile/> },
      { path: '/setting', element: <Setting/> }
    ]
  },
  { path: '/login', element: <Auth/> }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
