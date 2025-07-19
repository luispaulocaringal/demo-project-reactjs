import './App.css'

import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Auth />
      {/* <Home/> */}
      <Footer />
    </div>
  )
}

export default App
