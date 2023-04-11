import React, { useState } from "react";
import { useEffect } from "react";

import "./Rightdiv.css";

export const Rightdiv = ({
  resetleftdiv,
  billValue,
  numpeopleValue,
  tipValue
}) => {

  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  useEffect(() => {
    if (billValue != "" && numpeopleValue != "" && tipValue != "") {
      setTotal(
        (
          (parseFloat(billValue) +
            parseFloat(billValue) * parseFloat(tipValue)) /
          parseFloat(numpeopleValue)
        ).toFixed(2)
      );
      setTipAmount(
        (
          (parseFloat(billValue) * parseFloat(tipValue)) /
          parseInt(numpeopleValue)
        ).toFixed(2)
      );
    }
  }, [billValue, tipValue, numpeopleValue]);

  function resetAll(){
    setTipAmount("0.00");
    setTotal("0.00");
    resetleftdiv();
  }

  return (
    <div className="main-rightdiv">
      <div className="tip-amount">
        <div>
          <p className="title">Tip Amount</p>
          <p className="person">/ person</p>
        </div>
        <div>
          <p class="tip-amount-value">${tipAmount}</p>
        </div>
      </div>
      <div className="total">
        <div>
          <p className="title">Total</p>
          <p className="person">/ person</p>
        </div>
        <div>
          <p className="total-value">${total}</p>
        </div>
      </div>
      <button className="reset-btn" onClick={resetAll}>
        Reset
      </button>
    </div>
  );
};
