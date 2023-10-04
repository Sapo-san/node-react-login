import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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

          <PrivateRoute path="/protected" component={Protected} />

          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  )
}

export default App
