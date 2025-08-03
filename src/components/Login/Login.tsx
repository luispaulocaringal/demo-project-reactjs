import { useEffect, useRef } from 'react';
import { useNavigate, useActionData, Form } from 'react-router-dom';

import { FadeInUp } from '../Animation/Animation';

import './Login.css';

function Login() {
  const actionData = useActionData();
  const userRef:any = useRef('');

  let navigate = useNavigate();

  // focus on username field on component load
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // initialize the login response from the action data
  const loginResponse = actionData || { success: false, message: '' };

  // check if login was successful, if so, navigate to the home page
  if (loginResponse.success) {
    navigate('/'); 
  }

  // initialize the login message
  let loginMessage = <></>;

  // show the login message if it exists
  if (loginResponse.message !== '') {
    loginMessage = (
      <div className="row mb-2">
        <div className="col-md-12">
          <p className={"login-message p-2 alert " + (loginResponse.success ? "alert-success" : "alert-danger")}>{ loginResponse.message }</p>
        </div>
      </div>
    )
  }

  return (
    <FadeInUp 
      className="card shadow mx-auto my-auto login-card"
      duration="1s"
      component="div"
    >
      <div className="card-body">
        <Form method="post">
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="form-group">
                <label className="input-label">Username</label>
                <input className="form-control" type="text" name="username" ref={userRef} required/>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="form-group">
                <label className="input-label">Password</label>
                <input className="form-control" type="password" name="password" required/>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="form-group">
                <label className="input-label">Company Code</label>
                <input className="form-control" type="text" name="company" required/>
              </div>
            </div>
          </div>
          { loginMessage }
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="form-group">
                <button className="btn btn-primary float-start">Login</button>
                <a className="btn btn-link float-end px-0 forgot-password" href="">Forgot Password?</a>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </FadeInUp>
  )
}

export default Login