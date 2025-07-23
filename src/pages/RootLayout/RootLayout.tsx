import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

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
        <Footer />
      </div>
    </>
  )
}

export default RootLayout;