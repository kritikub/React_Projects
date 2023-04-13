import { useState } from "react";

const Jiten = (props) => {
    let [counter, setCounter] = useState(23);

    function increment() {
        setCounter(counter + 1)
    }
    return <>
        <h1>Hello Jiten {props.age} {counter}</h1>
        {/* <button  onClick={() => {
            increment();
        }}> Click </button> */}
        <button  onClick={() => {
            increment();
        }}> Click </button>
    </>
}

export {Jiten}