import { useState, useEffect, useRef } from 'react'

import '../css/Login.css'

function Login () {
  const userRef:any = useRef('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(0);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (username != "test" || password != "password") {
      setMessage("Invalid Username or Password.");
      setSuccess(0);
      return;
    }
    setMessage("Login Success.");
    setSuccess(1);
    return;
  }

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setMessage('');
  }, [username, password]);

  return (
    <div className="card shadow">
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="form-group">
                <label>Username</label>
                <input className="form-control" type="text" ref={userRef} value={username} onChange={(e) => setUsername(e.target.value)} required/>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="form-group">
                <label>Company Code</label>
                <input className="form-control" type="text" value={company} onChange={(e) => setCompany(e.target.value)} required/>
              </div>
            </div>
          </div>
          {message ? 
            <div className="row mb-2">
              <div className="col-md-12">
                <p className={"login-message p-2 alert " + (success ? "alert-success" : "alert-danger")}>{message}</p>
              </div>
            </div>
          : 
            <></>
          }
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <button className="btn btn-primary float-start">Login</button>
                <a className="btn btn-link float-end px-0 forgot-password" href="">Forgot Password?</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login