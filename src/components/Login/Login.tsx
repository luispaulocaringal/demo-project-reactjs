import { useEffect, useRef } from 'react';
import { useNavigate, useActionData } from 'react-router-dom';

import { FadeInUp } from '../Animation/Animation';

import './Login.css';

function Login () {
  const actionData = useActionData();
  const loginResponse = actionData || { success: false, message: '' };
  const userRef:any = useRef('');

  let navigate = useNavigate();

  if (loginResponse.success) {
    // Redirect to the dashboard if login is successful
    navigate('/', { replace: true });
  }

  // Focus on username field on component load
  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <FadeInUp 
      className="card shadow mx-auto my-auto login-card"
      duration="1s"
      component="div"
    >
      <div className="card-body">
        <form method="post" action="/login">
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="form-group">
                <label className="input-label">Username</label>
                <input className="form-control" type="text" ref={userRef} required/>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="form-group">
                <label className="input-label">Password</label>
                <input className="form-control" type="password" required/>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="form-group">
                <label className="input-label">Company Code</label>
                <input className="form-control" type="text" required/>
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