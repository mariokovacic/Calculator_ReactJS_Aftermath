import React from "react";




export function Tipkovnica() {


    // ---------------------------------

    function ispisi(brojevi) {
        let jednako = document.getElementById("input");
        jednako.value += brojevi;
        console.log(typeof brojevi);


    }



    return (
        <div className="calculator">

            <input type="text" readOnly id="input"></input>
            <br></br>

            <div className="keypad">

                <button value={"1"} onClick={(e) => ispisi(e.target.value)}>1</button>
                <button value={"2"} onClick={(e) => ispisi(e.target.value)}>2</button>
                <button value={"3"} onClick={(e) => ispisi(e.target.value)}>3</button>
                <br></br>

                <button value={"4"} onClick={(e) => ispisi(e.target.value)}>4</button>
                <button value={"5"} onClick={(e) => ispisi(e.target.value)}>5</button>
                <button value={"6"} onClick={(e) => ispisi(e.target.value)}>6</button>
                <br></br>
                <button value={"7"} onClick={(e) => ispisi(e.target.value)}>7</button>
                <button value={"8"} onClick={(e) => ispisi(e.target.value)}>8</button>
                <button value={"9"} onClick={(e) => ispisi(e.target.value)}>9</button>
                <br></br>
                <button value={"+"} onClick={(e) => ispisi(e.target.value)}>+</button>
                <button value={"/"} onClick={(e) => ispisi(e.target.value)}>/</button>
                <button value={"*"} onClick={(e) => ispisi(e.target.value)}>*</button>
                <br></br>
                <button value={"clear"} onClick={Obrisi} id="clear">CLEAR</button>
                <button value={"equal"} onClick={Jednako} id="jednako">=</button>


            </div>


        </div >



    )
    function Jednako() {


        let jednako = document.getElementById("input");
        jednako.value = JSON.stringify(eval(jednako.value))
        console.log("izracuna sve")
        console.log((Number(jednako.value)));


    }

    function Obrisi() {
        let jednako = document.getElementById("input");
        jednako.value = "";



    }

}

