import React, { useEffect, useState, useMemo, useRef } from "react";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import SideNav from "../../CommonComponents/SideNav";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


function Ticket() {
    const [rowData, setRowData] = useState([]);
    const gridStyle = useMemo(() => ({ height: '70%', width: '64%' }), []);

    const [columnDefs] = useState([
        { field: "title", minWidth: 150, sortable: true },
        { field: "description", minWidth: 390, sortable: true },
        { field: "priority", minWidth: 150, sortable: true },
        { field: "status", minWidth: 120, sortable: true },
    ]);

    const token = localStorage.getItem('token');
    const config = {
        headers: { 'Authorization': `Bearer ${token}` },
        params: {
            title: null,
            priority: null,
            status: null
        }
    }

    useEffect(() => {
        axios.get('https://fast-anchorage-45162.herokuapp.com/tickets', config)
            .then(res => res.data)
            .then(rowData => setRowData(rowData))
    }, []);

    return (
        <div className="grid-container">
            <SideNav />
            <div className="content-grid-div">
                <h3 className="ticket-header">Ticket Management</h3>
                <div style={gridStyle} className="ag-theme-alpine">
                    <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
                </div>

            </div>
        </div>

    );
}

export default Ticket;
