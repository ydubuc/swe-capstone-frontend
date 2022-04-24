import React, { useEffect, useState, useMemo, useRef } from "react";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import SideNav from "../../CommonComponents/SideNav";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function DeleteTicket() {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const gridStyle = useMemo(() => ({ height: '70%', width: '64%' }), []);

    const [columnDefs] = useState([
        { field: "title", minWidth: 150, sortable: true, checkboxSelection: true },
        { field: "description", minWidth: 390, sortable: true },
        { field: "priority", minWidth: 150, sortable: true },
        { field: "status", minWidth: 150, sortable: true },
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
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    useEffect(() => {
        axios.get('https://fast-anchorage-45162.herokuapp.com/tickets', config)
            .then(res => res.data)
            .then(rowData => setRowData(rowData))
    }, []);


    const onButtonClick = e => {
        const selectedRows = gridRef.current.api.getSelectedRows();
        alert(`Deleted selected row: ${selectedRows[0].title}`)
        axios.delete('https://fast-anchorage-45162.herokuapp.com/tickets/' + `${selectedRows[0].id}`, { headers })
            .then(() => {
                console.log("Deleted!");
                window.location.reload();
            });
    }

    return (
        <div className="grid-container">
            <SideNav />
            <div className="content-grid-div">
                <h3 className="ticket-header">Delete Ticket</h3>
                <div style={gridStyle} className="ag-theme-alpine">
                    <p>Note: Please select one ticket to delete</p>
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={columnDefs}
                        rowSelection={'single'}></AgGridReact>
                </div>

                <div className="ticket-footer">
                    <button onClick={onButtonClick}>Delete</button>
                </div>
            </div>

        </div>

    );
}

export default DeleteTicket;
