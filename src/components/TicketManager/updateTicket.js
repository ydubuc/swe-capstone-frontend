import React, { useCallback, useEffect, useState, useMemo, useRef } from "react";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import SideNav from "../../CommonComponents/SideNav";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function UpdateTicket() {

    return (
        <div className="grid-container">
            <SideNav />
            <div className="content-grid-div">
                <p>Update ticket page coming soon</p>
            </div>

        </div>
    );
}

export default UpdateTicket;