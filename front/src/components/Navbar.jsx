import { NavLink, useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const SESSION_KEY = import.meta.env.VITE_SESSION_KEY


const Navbar = () => {
    const history = useHistory()

    const sendLogOutRequest = async () => {
        try {
            let res = await axios.get(API_URL + '/auth/logout')
            if (res.status === 200) {
                history.push('/home')
                Cookies.remove(SESSION_KEY)
            }
            
        } catch(err) {
            console.log(err)
        }
    }

    const showLoginOrLogOut = () => {
        if (!Cookies.get(SESSION_KEY)) { // No session cookie
            return <NavLink
                to="/login" 
                exact={true}
                className="nav-link">
                    Login
            </NavLink>
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
        
        <NavLink
            to="/protected" 
            exact={true}
            className="nav-link">
                Protected
        </NavLink>

        {showLoginOrLogOut()}
</nav>
  )
}

export default Navbar