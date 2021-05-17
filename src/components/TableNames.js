import React from 'react';

const TableNames = (props) => {
    const tables = props.tables;

    const handleTableClick = ((event) => {
        console.log("line 7",event.target.value);
        props.parentCallBack(event.target.value);
    })

    return (
        <div>
            <ul>
                {
                    tables.map((table, index) => (
                        <li key={index}>
                            <button value={table}
                                onClick={handleTableClick}>{table}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TableNames;