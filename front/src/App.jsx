import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

// Routes
import Home from './routes/Home';
import Login from "./routes/Login";

// Bootstrap
import './App.css'
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import Protected from "./routes/Protected";

function App() {

  return (
    <Router>
      <div>
        <nav className="navbar navbar-light bg-light border rounded px-3">
          <NavLink
            to="/" 
            exact={true}
            className="nav-link"
            >Home
          </NavLink>
          <NavLink
            to="/login" 
            exact={true}
            className="nav-link"
            >Login
          </NavLink>
          <NavLink
            to="/protected" 
            exact={true}
            className="nav-link"
            >Protected
          </NavLink>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/protected">
            <Protected/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
