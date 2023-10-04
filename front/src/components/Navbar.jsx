import { NavLink, useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { removeCredentials } from '../slices/credentialsSlice'

const API_URL = import.meta.env.VITE_API_URL


const Navbar = () => {
    // Redux state
    const credentials = useSelector((state) => state.credentials.cookie)
    const dispatch = useDispatch()

    // Redirect
    const history = useHistory()

    const sendLogOutRequest = async () => {
        try {
            let res = await axios.get(API_URL + '/auth/logout')
            if (res.status === 200) {
                dispatch(removeCredentials())
                history.push('/home')
            }
            
        } catch(err) {
            console.log(err)
        }
    }

    const showProtectedRoute = () => {
        if (credentials) {
            return <NavLink
                to="/protected" 
                exact={true}
                className="nav-link">
                    Protected
            </NavLink>
        }
         return <></>
    }

    const showLoginOrLogOut = () => {
        
        if (!credentials) { // No session cookie
            return <div className='d-flex flex-row'>
                    <NavLink
                        to="/login" 
                        exact={true}
                        className="nav-link">
                            Login
                    </NavLink>
                    <NavLink
                        to="/register" 
                        exact={true}
                        className="nav-link ms-3">
                            Register
                    </NavLink>
                </div>
        } else { // Session Cookie
            return <a 
                href='/home'
                onClick={async (e) => {
                    e.preventDefault()
                    sendLogOutRequest()
                }}
                className="nav-link">
                    Logout
            </a>
        }
    }

    return (
        <nav className="navbar navbar-light bg-light border rounded px-3">
        <NavLink
            to="/" 
            exact={true}
            className="nav-link">
                Home
        </NavLink>
        
        {showProtectedRoute()}

        {showLoginOrLogOut()}
</nav>
  )
}

export default Navbar