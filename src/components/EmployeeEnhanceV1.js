import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import EmployeeList from "./EmployeeList";
import employees from './employees.json'

export default function EmployeeEnhanceV1() {
    let [form, setForm] = useState({});
    let [employeeDatas, setEmployeeDats] = useState(employees);
    let [filterEmployeeData, setFilterEmployeeData] = useState(employees);
    let [toUdate , setToUpdate] = useState(false);
    
    function addEmployee() {
        if (!employeeDatas) {
            employeeDatas = [];
        }
        // employeeDatas.push(form);
        setEmployeeDats([...employeeDatas , form]);
        reset();
    }

    function reset() {
        setForm({
            name: '',
            age: '',
            gender: ''
        });
        console.log(employeeDatas)
    }

    function editData(index, e) {
        setForm(e);
    }

    function deleteEmployee(index) {
        if(window.confirm("Do you want to delete " + employeeDatas[index].name)) {
            employeeDatas.splice(index, 1);
            setEmployeeDats([...employeeDatas]);
        }

    }

    function searchByText(filterValue) {
        setFilterEmployeeData(employeeDatas.filter(e => e.name && e.name.toLowerCase().includes(filterValue.toLowerCase())))
    }

    return <>
        <Header></Header>
        <input type="text" value={form.name} onChange={(e) => {
            setForm({ ...form, name: e.target.value });
        }}></input>
        <input type="text" value={form.age} onChange={(e) => {
            setForm({ ...form, age: e.target.value })
        }}></input>
        <input type="text" value={form.gender} onChange={(e) => {
            setForm({ ...form, gender: e.target.value })
        }}></input>
        <button onClick={() => {
            addEmployee()
            // setToUpdate(false);
        }}>{toUdate ? "Update" : "Add"}</button>

        <button onClick={() => {
            reset()
        }}>Reset</button>
        <EmployeeList employeeDatas={filterEmployeeData} 
            editData={editData}
             deleteEmployee={deleteEmployee}
             searchByText={searchByText}
             setToUpdate = {setToUpdate}
             ></EmployeeList>
        <Footer></Footer>
    </>
}