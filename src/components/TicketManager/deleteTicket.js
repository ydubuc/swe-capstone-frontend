import React, { useCallback, useEffect, useState, useRef } from "react";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import SideNav from "../../CommonComponents/SideNav";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function DeleteTicket() {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const [state, setState] = React.useState({
            id: ""
    });


    const [columnDefs] = useState([
       { field: "title", sortable: true, checkboxSelection: true },
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



    const onButtonClick = e => {
        const selectedRows = gridRef.current.api.getSelectedRows();
        console.log(selectedRows[0]);
        alert(`Deleted selected row: ${selectedRows[0].title}`)
        axios.delete('https://fast-anchorage-45162.herokuapp.com/tickets/'+ `${selectedRows[0].id}`, {'Authorization': `Bearer ${token}`})
                    .then(res => {
                        console.log("Deleted!");
                    })
     }

  return (
    <div className="grid-container">
        <SideNav />
        <div className="content-grid-div">
            <p>Delete Ticket Page</p>
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                rowSelection={'single'}></AgGridReact>
            <button onClick={onButtonClick}>Delete</button>
        </div>
    </div>

  );
}

export default DeleteTicket;
