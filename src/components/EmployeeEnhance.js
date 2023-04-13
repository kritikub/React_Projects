import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function EmployeeEnhance() {
    let [form, setForm] = useState({});

    function valueNameChange(e) {
        setForm({...form, name : e.target.value});
        print(form)
    }

    function valueAgeChange(e) {
        setForm({...form, age: e.target.value});
        print(form)
    }

    function valueGenderChange(e) {
        form.gender = e.target.value
        setForm(form);
        print(form)
    }

    function print() {
        console.table(form);
    }

    return <>
        <Header></Header>
        <input type="text" value={form.name} onChange={(event) => {
            valueNameChange(event)
        }}></input>
        <input type="text" value={form.age} onChange={(event) => {
            valueAgeChange(event)
        }}></input>
        <input type="text" value={form.gender} onChange={(event) => {
            valueGenderChange(event)
        }}></input>
        <Footer></Footer>
    </>
}