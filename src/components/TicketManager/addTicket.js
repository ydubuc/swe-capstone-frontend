import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import SideNav from "../../CommonComponents/SideNav";

function AddTicket() {
  const history = useHistory();
  const [state, setState] = React.useState({
    title: "",
    description: "",
    priority: "",
    status: "active",
    created: false,
    message: ""
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  }
  const newTicketObj = {
    title: state.title,
    description: state.description,
    priority: state.priority,
    status: state.status
  }
  const handleSubmit = event => {
    event.preventDefault();
    axios.post("https://fast-anchorage-45162.herokuapp.com/tickets", newTicketObj, config)
      .catch((error) => {
        console.log(error.response.data.message);
        setState({
          ...state,
          created: true,
          message: error.response.data.message,
        });
      })
      .then((response) => {
        console.log(response);
        if (response) {
          setState({
            ...state,
            created: false,
            message: ""
          });

          history.push(
            {
              pathname: "/tickets",
            });
        }
      });
  };


  return (
    <div className="grid-container">
      <SideNav />
      <div className="content-grid-div">
        <div>

          <form className="ticket-form-group" onSubmit={handleSubmit}>
            <h3 className="ticket-header">Create New Ticket</h3>
            <div className="form-group">
              <label>Title</label>
              <input
                type="title"
                className="form-control"
                placeholder="Enter ticket title"
                name="title"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Description</label>
              <input
                type="description"
                className="form-control"
                placeholder="Please enter a ticket description"
                name="description"
                onChange={handleChange}
                rows="10" cols="30"
              />
            </div>
            <br />
            <p>Ticket Priority:</p>
            <div className="form-group">
              <form>
                <input type="radio" id="low" name="priority" value="low" onChange={handleChange} />
                <label for="low">LOW</label><br />
                <input type="radio" id="medium" name="priority" value="medium" onChange={handleChange} />
                <label for="medium">MEDIUM</label><br />
                <input type="radio" id="high" name="priority" value="high" onChange={handleChange} />
                <label for="high">HIGH</label>
              </form>
            </div>
            <br />

            <button type="submit" className="btn btn-primary btn-block" >
              Submit
            </button>

            {state.created &&
              <p style={{ color: "red" }}>
                {state.message}
              </p>
            }
          </form>

        </div>
      </div>
    </div>

  );
}

export default AddTicket;
