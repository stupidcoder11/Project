import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [rememberCheck, setRememberCheck] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('?');
  const navigate = useNavigate();

  const handleShow = ()=> { setShow(true); }
  
  const handleHide = ()=> {
    setShow(false)
    setTimeout(() => {
      navigate("/dashboard");
    }, 200);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {
      email: email,
      password: pass,
      rememberCheck: rememberCheck
    }

    Axios.post("http://localhost:3001/api/users/verify", data)
    .then((response)=>{
      setResponseData(response.data);
      if(response.data.results.length>0) {
        setName(response.data.results[0].name);
        handleShow();
      }
    })
    .catch((err)=>{
      console.log(err);
    });
  };

  useEffect(()=>{
    console.log(responseData);
  }, [responseData]);


  return (
    <div className="Login">
        <div className="container w-md-75 my-5" style={{ fontSize: "1.1rem" }}>
        <form
          className="p-3 p-sm-5"
          style={{
            boxShadow: "2px 2px 8px 0px rgba(0,0,0,0.3)"
          }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <div className="input-group">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email..."
                autoFocus
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
              {!(responseData.emailCheck)?
              <div className='container text-danger p-0'>{responseData.message}</div>
              :""
              } 
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-lock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password..."
                required
                onChange={(e)=>setPass(e.target.value)}
              />
              {!responseData.passwordCheck && responseData.emailCheck?
              <div className='container text-danger p-0'>{responseData.message}</div>
              :""
            }
            </div>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input 
                type="checkbox" 
                className="form-check-input"
                onChange={(e)=>setRememberCheck(e.target.checked)}/>
              <label className="form-check-label text-warning">
                Remember Me
              </label>
            </div>
          </div>
          <hr className="my-4" />
          {(email.length>0 && pass.length>0)?
          <>
          <button
            type="submit"
            className="btn btn-outline-warning w-100 p-md-3"
           >
            Login
          </button>
          <button type="reset" className="btn btn-outline-dark my-3 w-25">Reset</button></>
          :
          <>
          <button
            type="submit"
            className="btn btn-outline-warning w-100 p-md-3"
            disabled
           >
            Login
          </button>
          <button type="reset" className="btn btn-outline-dark my-3 w-25 disabled">Reset</button></>
          }
          <Link to='/signup'>
            <h6 className='text-secondary my-3 text-end text-decoration-underline'>New user?</h6>
          </Link>
        </form>
      </div>
      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize: "1.8rem", color: "#F6BE00"}}>Welcome {name}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">We hope hope you have a good experience!</p>   
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Login