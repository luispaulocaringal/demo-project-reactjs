import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { FadeInUp } from '../Animation/Animation';

import './Login.css';

function Login () {
  const userRef:any = useRef('');

  let navigate = useNavigate();

  // State of credential fields
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    company: ""
  })

  // State of login response
  const [loginResponse, setLoginResponse] = useState({
    success: 0,
    message: "",
  })

  // Handles login form submit
  async function handleSubmit(e:any) {
    e.preventDefault();

    // -------------------------------- TEST --------------------------------
    if (credentials.username != "test" || credentials.password != "password") {
      setLoginResponse({
        success: 0,
        message: "Invalid username or password."
      });
      return;
    }

    setLoginResponse({
      success: 1,
      message: "Login success."
    });
    navigate("/");
    return;
    // -------------------------------- TEST --------------------------------
  }

  // Handles input field changes in login form
  function handleChange(e:any, field:string) {
    e.preventDefault();

    setCredentials({
      ...credentials,
      [field]: e.target.value
    });
  } 

  // Focus on username field on component load
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Removes message data if username and password data is updated
  useEffect(() => {
    setLoginResponse({
      success: 0,
      message: "",
    });
  }, [credentials.username, credentials.password]);

  return (
    <FadeInUp 
      className="card shadow mx-auto my-auto"
      duration="1s"
      component="div"
    >
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="form-group">
                <label>Username</label>
                <input className="form-control" type="text" ref={userRef} value={credentials.username} onChange={(e) => handleChange(e, "username")} required/>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" value={credentials.password} onChange={(e) => handleChange(e, "password")} required/>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="form-group">
                <label>Company Code</label>
                <input className="form-control" type="text" value={credentials.company} onChange={(e) => handleChange(e, "company")} required/>
              </div>
            </div>
          </div>
          { loginResponse.message ? (
            <div className="row mb-2">
              <div className="col-md-12">
                <p className={"login-message p-2 alert " + (loginResponse.success ? "alert-success" : "alert-danger")}>{ loginResponse.message }</p>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="form-group">
                <button className="btn btn-primary float-start">Login</button>
                <a className="btn btn-link float-end px-0 forgot-password" href="">Forgot Password?</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </FadeInUp>
  )
}

export default Login