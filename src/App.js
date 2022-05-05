import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Ticket from "./components/TicketManager/ticket";
import AddTicket from "./components/TicketManager/addTicket";
import DeleteTicket from "./components/TicketManager/deleteTicket";
import UpdateTicket from "./components/TicketManager/updateTicket";
import placeholderImageLogo from "./Images/G.png";
import About from "./components/about";
import ProtectedRoute from "./util/protected-route";
import { Image } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-div">
          <ul className="navbar">
            <li>
              <a
                id="logo-nav"
                className="logo-nav"
                style={{ padding: "0px" }}
                href="/"
              >
                <Image
                  src={placeholderImageLogo}
                  className="logo-img"
                  style={{ width: "100px", height: "50px" }}
                />
              </a>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link className="Login1" to={"/sign-in"}>
                Login
              </Link>
            </li>
            <li>
              <Link className="signup1" to={"/sign-up"}>
                Sign up
              </Link>
            </li>
            <li>
              <Link to="/tickets">Ticket Manager</Link>
            </li>
            <li>
              <Link className="about" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <a href="mailto:ksuwebservices@gmail.com">Email Us</a>
            </li>
            <li onClick={() => localStorage.removeItem("token")}>
              <Link to={"sign-in"}>Logout</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <ProtectedRoute path="/tickets" component={Ticket} />
            <ProtectedRoute path="/update-tickets" component={UpdateTicket} />
            <ProtectedRoute path="/delete-tickets" component={DeleteTicket} />
            <ProtectedRoute path="/add-tickets" component={AddTicket} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
