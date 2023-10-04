import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../slices/credentialsSlice'

const SESSION_KEY = import.meta.env.VITE_SESSION_KEY
const API_URL = import.meta.env.VITE_API_URL

const Login = () => {
  // Redux State
  const dispatch = useDispatch()
  
  // Component State
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
      // if login is successful, session cookie has been set
      dispatch(setCredentials(Cookies.get(SESSION_KEY)))
      history.push('/protected')
    }).catch(err => {
      console.log(err)
    })

    
  }

  return (
    <div className='border rounded m-3'>
        <h1 className='mt-4'>Log in</h1>
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
            <button type="submit" onClick={loginSubmit} className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login