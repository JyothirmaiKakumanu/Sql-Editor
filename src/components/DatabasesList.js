import React, { useState } from 'react';
import TableNames from './TableNames';
import SearchData from '../TableFields/SearchData.js';

const DatabasesList = () => {

    const tables = ['categories', 'customers', 'employee_territories', 'employees', 'order_details', 'orders', 'products', 'regions', 'shippers', 'suppliers', 'territories'];

    const [selectedTable, setSelectedTable] = useState('categories');

    const handleCallBack = (childData) => {
        console.log("childdata", childData);
        setSelectedTable(childData);
    }

    return (
        <>
            <div className="editor-body">
                <div className="databases">
                    <div className="searchBox">
                        <div className="tables">
                            <p>Tables</p>
                            <TableNames parentCallBack={handleCallBack}
                                tables={tables} />
                        </div>

                    </div>
                </div>
                <div className="table-fields">
                    <h1>{selectedTable}</h1>
                    <hr />
                    <SearchData tableSelected={selectedTable}/>
                </div>
            </div>
        </>
    );
};

export default DatabasesList;