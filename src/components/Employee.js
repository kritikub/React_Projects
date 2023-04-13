import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Employee() {
    let [name, setName] = useState("SUshant");
    let [age, setAge] = useState(27);
    let [gender, setGender] = useState("M");

    function valueNameChange(e) {
        setName(e.target.value)
    }

    function valueAgeChange(e) {
        setAge(e.target.value)
    }

    function valueGenderChange(e) {
        setGender(e.target.value)
    }
    return <>
        <Header></Header>
        <input type="text" value={name} onChange={(event) => {
            valueNameChange(event)
        }}></input>
        <input type="text" value={age} onChange={(event) => {
            valueAgeChange(event)
        }}></input>
        <input type="text" value={gender} onChange={(event) => {
            valueGenderChange(event)
        }}></input>
        <Footer></Footer>
    </>
}