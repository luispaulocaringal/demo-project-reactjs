import Login from '../../components/Login/Login'
import Title from "../../components/Title/Title";

import './Auth.css'

function Auth () {
  return (
    <>
      <Title title="Login"/>
      <div className="auth d-flex justify-content-center">
        <Login/>
      </div>
    </>
  )
}

export default Auth