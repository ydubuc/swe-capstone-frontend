// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from './components/home';
// import Login from "./components/login.component";
// import SignUp from "./components/signup.component";
// import ticket from './components/ticket.js';

// function App() {
//   return (<Router>
//     <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={"/sign-in"}>Dummy</Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link Login" to={"/sign-in"}>Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route path="/sign-in" component={Login} />
//             <Route path="/sign-up" component={SignUp} />
//             <Route path="/tickets" component={ticket} />
//           </Switch>
//         </div>
//       </div>
//     </div></Router>
//   );
// }

// export default App;




import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home';
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import ticket from './components/ticket.js';
import placeholderImageLogo from "./Images/G.png";
import About from './components/about'
import { Navbar, Container, Row, Col, Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-div" style={{height: '100%'}}>
          <ul className="navbar">
            <li>
              <a id="logo-nav" className="logo-nav" style={{padding: '0px'}} href='/'><Image src={placeholderImageLogo} className="logo-img" style={{width: '100px', height: '50px'}} /></a>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link  className="Login1" to={"/sign-in"}>Login</Link>
            </li>
            <li>
              <Link className="signup1" to={"/sign-up"}>Sign up</Link>
            </li>
            <li>
              <Link  className="about" to="/about">About Us</Link>
            </li>
            <li>
              <a href="mailto:ksuwebservices@gmail.com">Email Us</a> 
            </li>
            {/* <li>
              <Link to="/start">Started</Link>
            </li> */}
          </ul>
          {/* <hr /> */}
          <Switch>
          <Route exact path='/' component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/tickets" component={ticket} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
