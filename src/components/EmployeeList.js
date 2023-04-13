import { useState } from "react";

export default function EmployeeList(param) {
    let [filterValue, setFilterValue] = useState("");
    let [filterProperty , setFilterProperty] = useState("name");
    
    let employeeDatas = param.employeeDatas;
    console.log(employeeDatas);

    function editEmployee(index, e) {
        param.editData(index, e);
        param.setToUpdate(true);
    }

    function deleteEmployee(index) {
        param.deleteEmployee(index);
    }

    function searchByText() {
        param.searchByText(filterValue);
    }

    function filterPropertyValue(e) {
        console.log("Value changed : "+e.target.value);
        setFilterProperty(e.target.value);
    }

    function printData() {
        window.print();
   
    }
    return <>
        <h1>Employee List</h1>
        <h3>Search By :<input type="text" value={filterValue} onChange={(e) => {
            setFilterValue(e.target.value);
        }}></input>
        <select value={filterProperty} onChange={(e) => filterPropertyValue(e)}>
            <option value="name">name</option>
            <option value="age">age</option>
            <option value="gender" >gender</option>
        </select>
        <button onClick={() => printData()}>
        Print
        </button>
            </h3>
            {/* <button onClick={() => {
                searchByText()
            }}>Search</button> */}
        <table style={{
            width:'100%',
            border: '2px solid blue'
        }} id="print-area">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Profile</th>
                <th>
                    Action
                </th>
            </tr>
            {employeeDatas.filter(e => (e[filterProperty]+'').toLowerCase().includes(filterValue.toLowerCase())).map((e, index) => {
                return <tr onMouseOver={(e) => {
                    let selectedRows = document.getElementsByClassName('my-hover-tr');
                    for(let index =0; index < selectedRows.length; index++) {
                        selectedRows[index].classList.remove('my-hover-tr');
                    }
                    e.target.classList.add('my-hover-tr')
                }}
                >
                    <td style={{
                        background : e.gender === "Male" ? "royalblue" : "orange"
                    }}>{e.gender === "Male" ? "MR. " : "MRS. " }{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.gender}</td>
                    <td class="container">
                        <img style={{
                            height: "4rem"
                        }} src={e.thumbline} alt="NI"></img>
                    </td>
                    <td>
                        <button onClick={() => editEmployee(index, e)}>Edit</button>
                        <button onClick={() => deleteEmployee(index)}>Delete</button>
                    </td>
                </tr>
            })}
        </table>
    </>
}