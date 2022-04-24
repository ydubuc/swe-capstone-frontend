import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SideNavData } from "./SideNavData";


function SideNav() {
    return (
        <div className="side-nav-div">
            <ul className="side-navbar">
                {SideNavData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}>
                            <Link to={val.link}>{val.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default SideNav;
