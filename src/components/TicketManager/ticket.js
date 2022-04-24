import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import SideNav from "../../CommonComponents/SideNav";


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


function Ticket() {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);

    const [columnDefs] = useState([
          { field: "title", sortable: true },
          { field: "priority", sortable: true  },
          { field: "status", sortable: true  },
    ]);

    const token = localStorage.getItem('token');
    const config = {
        headers: {'Authorization': `Bearer ${token}`},
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
                <h3>Ticket Management</h3>
                <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
            </div>
        </div>

    );
}

export default Ticket;
