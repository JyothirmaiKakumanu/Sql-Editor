import React, { useEffect, useState } from 'react';

const TableResults = ({ data, inputVal, dropdownVal, colName }) => {
    console.log("table results", data);

    const [filteredData, setFilteredData] = useState([]);

    const renderRow =(tableRow)=>{
       return( tableRow?.map((dt, idx) => {
            { console.log("filteredData", dt) }
            return (
                <tr className="filtered-tableRow">
                    {Object.values(dt).map((val) => {
                        return <td className="filtered-tableCol">{val}</td>
                    })}
                </tr>)
        }))
    }

    const filterTableData = () => {

        const filterArr = dropdownVal.map((operator, index) => {
            if (operator !== undefined) {
                return data.filter((dataItem) => {
                    let temp = false;
                    Object.keys(dataItem).forEach(dataItemKey => {
                        if (colName[index] === dataItemKey) {
                            switch (operator) {
                                case "==":
                                    dataItem[dataItemKey] == inputVal[index] && (temp = true);
                                    break;
                                case ">":
                                    dataItem[dataItemKey] > inputVal[index] && (temp = true);
                                    break;
                                case "<":
                                    dataItem[dataItemKey] < inputVal[index] && (temp = true);
                                    break;
                                case ">=":
                                    dataItem[dataItemKey] >= inputVal[index] && (temp = true);
                                    break;
                                case "<=":
                                    dataItem[dataItemKey] <= inputVal[index] && (temp = true);
                                    break;
                                default:
                                    break;
                            }

                        }
                    })
                    return temp;
                })

            }
        })

        console.log("filterArr", filterArr);
        setFilteredData(filterArr);
    }

    useEffect(() => {
        console.log("useEffect");
        filterTableData();
    }, [data, inputVal, dropdownVal, colName]);


    return (
        <>
            <table className="filtered-table">
                <thead>
                    <tr className="filtered-tableRow">
                        {Object.keys(data[0]).map((fieldKey, index) => {
                            return (
                                <th>{fieldKey}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length===0? renderRow(data) : renderRow(filteredData[0]) }
                </tbody>
            </table>

        </>
    );
};

export default TableResults;