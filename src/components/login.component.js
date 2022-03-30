import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
let  unreadMessages = false;
function Login() {
  const history = useHistory();
  const [state, setState] = React.useState({
    email: "",
    password: "",
    created:false
  
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    axios.post(" https://swe-capstone-backend.herokuapp.com/auth/sign-in", {
      email: state.email,
      password: state.password
    })
    .then((response) => {
      console.log("hi")
      console.log(response);
      unreadMessages=true;
      console.log( unreadMessages)
      // setState({
      //   ...state,
      //  created: true
      // });
      history.push(
        {
            pathname:"/tickets",
            // state:{detail:response.data}
    });
    });
  };
  console.log(state);
  return (
    <div>
<form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block" >
        Submit
      </button>
 
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
      {unreadMessages &&
    <p>
      You have  unread messages.
    </p>
    
  }
    </form>
    {/* <div className="container">
      {state.created && <p>sucess</p>}
    </div> */}
    </div>
    
  );
}

export default Login;