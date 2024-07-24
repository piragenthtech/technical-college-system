"use client";
import formcss from "./form.module.css";
import React, { useState } from "react";
let switcher = true;

function Form() {
  function switchname() {
    let name1 = "piragenth";
    let name2 = "satkuanannthan";
    switcher = !switcher;
    console.log(switcher);
    if (switcher) {
      setname(name1);
    } else {
      setname(name2);
    }
  }
  let [name, setname] = useState("Click To Change");
  return (
    <>
      <h1>{name}</h1>
      <button
        className="formcss.clickme"
        onClick={() => {
          switchname();
          console.log(name);
        }}
      >
        click to change
      </button>
    </>
  );
}

export default Form;
