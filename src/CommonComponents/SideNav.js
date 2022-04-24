import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function SideNav() {
  return (
    <div className="side-nav-div">
        <ul className="side-navbar">
            <li>
                <Link to="/tickets">View All Tickets</Link>
            </li>
            <li>
                <Link to={"/add-tickets"}>Add New Ticket</Link>
            </li>
            <li>
                <Link to={"/delete-tickets"}>Delete Ticket</Link>
            </li>
        </ul>
    </div>
  );
}

export default SideNav;
