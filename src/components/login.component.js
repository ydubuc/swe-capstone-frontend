import React from "react";
import axios from "axios";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
let unreadMessages = false;

function Login() {
  const history = useHistory();
  const [state, setState] = React.useState({
    email: "",
    password: "",
    created: false,
    message: "",
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://fast-anchorage-45162.herokuapp.com/auth/sign-in", {
        email: state.email,
        password: state.password,
      })
      .catch((error) => {
        unreadMessages = true;
        setState({
          ...state,
          created: true,
          message: error.response.data.message,
        });
      })
      .then((response) => {
        if (response) {
          setState({
            ...state,
            created: false,
          });

          localStorage.setItem("token", response.data.token);
          history.push({
            pathname: "/tickets",
          });
        }
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form className="on" onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control em"
              placeholder="Enter email"
              onChange={handleChange}
              value={state.email}
              name="email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control pa"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
              value={state.password}
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

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>

          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
          {state.created && (
            <p className="error" style={{ color: "red" }}>
              {state.message}
            </p>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
