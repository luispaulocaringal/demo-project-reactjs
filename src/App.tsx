import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

import RootLayout from './pages/RootLayout/RootLayout';
import ContactRoot from './pages/Contacts/ContactRoot';
import Auth, { action as loginAction } from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Contacts, { loader as contactsLoader } from './pages/Contacts/Contacts';
import ContactDetails from './pages/Contacts/ContactDetails';
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
      { index: true, element: <Home/> },
      { 
        path: 'contact', 
        element: <ContactRoot/>, 
        children: [
        { 
          index: true, 
          element: <Contacts/>,
          loader: contactsLoader, 
        },
        { path: ':contactId', element: <ContactDetails/> }
      ] },
      { path: 'finance', element: <Finance/> },
      { path: 'marketing', element: <Marketing/> },
      { path: 'insight', element: <Insight/> },
      { path: 'content', element: <Content/> },
      { path: 'profile', element: <Profile/> },
      { path: 'setting', element: <Setting/> }
    ]
  },
  { 
    path: '/login', 
    element: <Auth/>, 
    action: loginAction 
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
