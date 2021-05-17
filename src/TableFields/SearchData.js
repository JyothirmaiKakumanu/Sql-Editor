import React, { useEffect, useState } from 'react';
import CategoriesFields from '../categories.json';
import CustomerFields from '../customers.json';
import Employee_territories from '../employee_territories.json';
import EmployeesFields from '../employees.json';
import OrderDetailsFields from '../order_details.json';
import OrdersFields from '../orders.json';
import ProductsFields from '../products.json';
import RegionFields from '../regions.json';
import ShippersFields from '../shippers.json';
import SupplierFields from '../suppliers.json';
import TerritoriesFields from '../territory.json';
import TableResults from './TableResults';

const SearchData = ({ tableSelected }) => {

    const [data, setData] = useState(CategoriesFields);
    const [inputValue, setInputValue] = useState([]);
    const [dropdown, setDropDown] = useState([]);
    const [colName, setColName] = useState([]);

    const handleTableFile = () => {
        switch (tableSelected) {
            case "categories":
                setData(CategoriesFields);
                break;
            case "customers":
                console.log("customers");
                setData(CustomerFields);
                break;
            case "employee_territories":
                setData(Employee_territories);
                break;
            case "employees":
                setData(EmployeesFields);
                break;
            case "order_details":
                setData(OrderDetailsFields);
                break;
            case "orders":
                setData(OrdersFields);
                break;
            case "products":
                setData(ProductsFields);
                break;
            case "regions":
                setData(RegionFields);
                break;
            case "shippers":
                setData(ShippersFields);
                break;
            case "suppliers":
                setData(SupplierFields);
               break;
            case "territories":
                setData(TerritoriesFields);
                break;
            default:
                break;

        }
    }

    useEffect(() => {
        handleTableFile();
    }, [tableSelected])


    const handleDropDownChange = (idx, value,field) => {
        const dropdownCopy = [...dropdown];
        dropdownCopy[idx] = value;
        setDropDown(dropdownCopy);
        const colNameCopy = [...colName];
        colNameCopy[idx] = field;
        setColName(colNameCopy);
    }

    const handleInputChange = (idx, value) => {
        const inputValueCopy = [...inputValue];
        inputValueCopy[idx] = value;
        setInputValue(inputValueCopy);
    }


    return (
        <div className="search-fields">
            <table className="searchTable">
                <thead>
                    <tr className="search-TableRow">
                        <th>S.No</th>
                        <th>ColumnName</th>
                        <th>Operator</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data[0]).map((fieldKey, index) => {
                        return (
                            <tr key={index + 1} className="search-tableRow">
                                <td className="search-tableCol">{index + 1}</td>
                                <td className="search-tableCol">{fieldKey}</td>
                                <td className="search-tableCol">
                                    <select onChange={(e) => handleDropDownChange(index, e.target.value,fieldKey)}>
                                        <option>Select</option>
                                        <option value="==">==</option>
                                        <option value=">">{">"}</option>
                                        <option value="<">{"<"}</option>
                                        <option value=">=">{">="}</option>
                                        <option value="<=">{"<="}</option>
                                    </select>
                                </td>
                                <td className="search-tableCol">
                                    <input onChange={(e) => handleInputChange(index, e.target.value)} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {console.log("data results",inputValue,dropdown,colName)}
            <TableResults data={data} inputVal={inputValue} dropdownVal={dropdown} colName={colName} />

        </div>
    );
};

export default SearchData;