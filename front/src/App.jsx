import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

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
        <Navbar/>
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
