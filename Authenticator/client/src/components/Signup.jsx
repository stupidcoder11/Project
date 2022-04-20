import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Modal from "react-bootstrap/Modal";

function Signup () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [tnc, setTnc] = useState(false);
  const [show, setShow] = useState(false);

  const handleHide = ()=>{
    setShow(false);
    setTimeout(()=>{
      navigate("/")
    }, 300)
  }

  let navigate = useNavigate();

  function handleSubmit(event) {
      event.preventDefault();
      const data = {
        name: name,
        email: email,
        password: pass
      };
      Axios.post("http://localhost:3001/api/users/create", data)
      .then((response)=>{
        console.log(response.data);
        if(response.data.message) {
          setShow(true);
        }
        else if(response.data.error) {
          if(response.data.error.errno === 1062) {
            alert("Email-ID already exists!");
          }
        }
      })
      .catch((error)=>{
        console.log("Error " + error);
      })
  }

  return (
    <div className="Signup">
      <div className="container w-md-75 my-5" style={{ fontSize: "1.1rem" }}>
        <form
          className="p-3 p-sm-5"
          style={{
            boxShadow: "2px 2px 8px 0px rgba(0,0,0,0.3)"
          }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Name..."
                onChange={(e)=>setName(e.target.value)}
                autoFocus
                required
              />
            </div>
          </div>
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
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
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
                onChange={(e)=>setPass(e.target.value)}
                required
              />
            </div>
            {pass.length<8 && pass.length>0?
              <div className="border my-2">
                Minimum length is 8 characters
              </div>
              :
              ""            
            }
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input 
                type="checkbox" 
                className="form-check-input"
                onChange={(e)=>setTnc(e.target.checked)} 
                required
              />
              <label className="form-check-label text-warning">
                I accept the Terms and Conditions
              </label>
            </div>
          </div>
          <hr className="my-4" />
          {(name.length > 0 && email.length > 0 && pass.length >7 && tnc)?
            <>
              <button
                type="submit"
                className="btn btn-outline-warning w-100 p-md-3"
              >
                Create account
              </button>
              <button type="reset" className="container btn btn-outline-dark my-3 w-25">Reset</button>
            </>
            :
            <>
              <button
                type="submit"
                className="btn btn-outline-warning w-100 p-md-3"
                disabled
              >
                Create account
              </button>
              <button type="reset" className="container btn btn-outline-dark my-3 w-25 disabled">Reset</button>
            </>
          }
          <Link to='/'><h6 className='text-secondary my-3 text-end text-decoration-underline'>Already a user?</h6></Link>
        </form>
      </div>
      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize: "1.8rem", color: "#F6BE00"}}>Account created!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Explore the site</p>   
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Signup;
