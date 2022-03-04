import React from 'react';
import '../App.css';

function SignUp() {
    const [state, setState] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    }

    console.log(state);
    return (
        <div>
            <form>
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
            </form>
        </div>
    );
}

export default SignUp;
