"use strict";
import { useState } from "react";
import { Accoridian } from "./Accordian";
import { accordianData } from "./data";
import "./styles.css";

export default function App() {
  const [expandedIndex, setExpendedIndex] = useState(-1);
  const [isFormEligible, setIsFormEligible] = useState(false);
  const accordianClickHandler = (event) => {
    console.log("parent buubled");
    // The closest ancestor Element or itself, which matches the selectors. If there are no such element, null.
    const clickedButtonElement = event.target.closest("button");
    if (clickedButtonElement) {
      const targetElementIndex = clickedButtonElement.dataset.index; // return string
      setExpendedIndex((prevExpendedIndex) =>
        prevExpendedIndex === targetElementIndex ? -1 : targetElementIndex
      );
      // next requirement
      // loop through all elemnts of accordian parent
      // and check if all input checkboxes are checked
      const checkBoxes = document.querySelectorAll(
        'button > input[type="checkbox'
      );
      const areAllCheckBoxedChecked = [...checkBoxes].every((checkbox) => {
        return checkbox.checked;
      });

      // const isAnyCheckBoxNotChecked = [...checkBoxes].find(
      //   (checkbox) => !checkbox.checked
      // );

      setIsFormEligible(areAllCheckBoxedChecked);
    }
  };

  return (
    <>
      <div onClick={accordianClickHandler}>
        {accordianData.map((data) => {
          return (
            <Accoridian
              data={data}
              key={data.id}
              expanded={expandedIndex === data.id}
            />
          );
        })}
      </div>
      <button disabled={!isFormEligible}>Submit Form</button>
    </>
  );
}
