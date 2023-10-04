import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";

// Routes
import Home from './routes/Home';
import Login from "./routes/Login";
import Register from "./routes/Register";
import Protected from "./routes/Protected";

// Bootstrap
import './App.css'
import "../node_modules/bootstrap/dist/js/bootstrap.js"

// Middleware
import PrivateRoute from "./middleware/PrivateRoute";

/*
  Important! without the following the session cookie will not be set
*/
axios.defaults.withCredentials = true 

function App() {
  return (
    <Router>
        <Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          
          {/* Private route can't be accessed unless authenticated */}
          <PrivateRoute path="/protected" component={Protected} />

          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  )
}

export default App
