import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
          e.preventDefault();
          axios.post('http://localhost:3000/login',{email,password})
          .then(result=>{console.log(result)
              if (result.data==="Loggin successfully") {
                navigate("/home")
              }
          })
          .catch(err=>console.log(error));
      }
  

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>
              <strong>Email</strong>
            </label>
            <input type="email" name="email" placeholder="Enter Email" className='form-control rounded-0' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>
              <strong>Password</strong>
            </label>
            <input type="password" name="password" placeholder="Enter Password" className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className='btn  text-white  w-100 bg-success rounded-0'>Login</button>
        </form>
        <p>Don't have an account</p>
        <Link to="/register" className='btn btn-default border w-100 bg-default rounded-0 text-decoration-none'>Register</Link>
      </div>
    </div>
  )
}

export default Login;
