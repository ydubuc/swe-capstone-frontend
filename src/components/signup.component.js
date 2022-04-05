import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function SignUp() {
  const history = useHistory();
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    message:"",
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
    axios.post("  https://swe-capstone-backend.herokuapp.com/auth/sign-up", {
      firstName: state.firstName,
      lastName: state.lastName,
      email:state.email,
      password:state.password
    })
    .catch((error) => {
      console.log("hi");
    
      console.log( error.response.data.message);
      setState({
       ...state,
       created: true,
       message:error.response.data.message,
     });
     })
    .then((response) => {
      console.log(response);
      if(response){
        setState({
          ...state,
         created: false,
         message:""
        });
        history.push(
          {
              pathname:"/sign-in",
              // state:{detail:response.data}
      });
        }
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={handleChange}
          name="firstName"
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={handleChange}
          name="lastName"
        />
      </div>

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
          onChange={handleChange}
          name="password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
      {state.created &&
    <p style={{color: "red"}}> 
      {state.message}
        </p>}
    </form>
  );
}

export default SignUp;
