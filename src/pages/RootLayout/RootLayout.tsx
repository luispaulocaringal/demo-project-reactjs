import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar'

function RootLayout() {
  const isLoggedIn = true;

  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar/>
      <div className="container-fluid pt-3 root-container">
        <Outlet/>
      </div>
    </>
  )
}

export default RootLayout;