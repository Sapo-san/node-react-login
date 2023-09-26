import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
/*
  Important! without the following the session cookie will not be set
*/
axios.defaults.withCredentials = true 

const API_URL = import.meta.env.VITE_API_URL

const Login = () => {
  // State
  const [userEmail, setUserEmail] = useState()
  const [userPassword, setUserPassword] = useState()

  // Navigator
  const history = useHistory()
  
  // Functions
  const loginSubmit = (e) => {
    // Prevent page refresh
    e.preventDefault()

    // Do login request
    axios.post(API_URL + '/auth/login', {
      email: userEmail,
      password: userPassword
    }, {
      headers: {
        'Content-Type': 'application/json', 
      }
    }).then(res => {
      console.log(res.status)
      history.push('/protected')
    }).catch(err => {
      console.log(err)
    })

    
  }

  return (
    <div className='border rounded m-3'>
        <form className='container-fluid text-start p-3'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUserEmail(e.target.value)}
                  />
                <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setUserPassword(e.target.value)}
                  />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" onClick={loginSubmit} className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Login