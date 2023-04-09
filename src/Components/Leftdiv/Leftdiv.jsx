import React, { useState } from "react";

import "./Leftdiv.css";
import imagemDollar from "./images/icon-dollar.svg";
import imagemPerson from "./images/icon-person.svg";

export const Leftdiv = () => {
  const [billValue, setbillValue] = useState(0);
  const [numpeopleValue, setnumpeopleValue] = useState(0);
  const [customtipValue, setcustomTipValue] = useState(0);
  const [tipValue, settipValue] = useState(0.15);

  var total, tipAmount;

  function calculate() {
    if (
      tipValue === 0.05 ||
      tipValue === 0.1 ||
      tipValue === 0.15 ||
      tipValue === 0.25 ||
      tipValue === 0.5
    ) {
      total = (
        (parseFloat(billValue) + parseFloat(billValue) * parseFloat(tipValue)) /
        parseFloat(numpeopleValue)
      ).toFixed(2);
      tipAmount = (
        (parseFloat(billValue) * parseFloat(tipValue)) /
        parseInt(numpeopleValue)
      ).toFixed(2);
    } else {
      total = (
        (parseFloat(billValue) +
          parseFloat(billValue) * parseFloat(customtipValue)) /
        parseInt(numpeopleValue)
      ).toFixed(2);
      tipAmount = (
        (parseFloat(billValue) * parseFloat(customtipValue)) /
        parseInt(numpeopleValue)
      ).toFixed(2);
    }
  }

  return (
    <div className="main-leftdiv">
      <div className="bill">
        <p>Bill</p>
        <img src={imagemDollar} alt="" className="bill-icon" />
        <input
          type="text"
          placeholder="0"
          onChange={(e) => setbillValue(e.target.value)}
        />
      </div>
      <div className="tip">
        <p>Select Tip %</p>
        <div className="tip-buttons">
          <button className="5%" onClick={() => settipValue(0.05)}>
            5%
          </button>
          <button className="10%" onClick={() => settipValue(0.1)}>
            10%
          </button>
          <button className="15%" onClick={() => settipValue(0.15)}>
            15%
          </button>
          <br />
          <button className="25%" onClick={() => settipValue(0.25)}>
            25%
          </button>
          <button className="50%" onClick={() => settipValue(0.5)}>
            50%
          </button>
          <input
            type="text"
            maxLength={3}
            placeholder="Custom"
            onChange={(e) => setcustomTipValue(e.target.value)}
          />
        </div>
      </div>
      <div className="number-people">
        <p>Number of People</p>
        <img src={imagemPerson} alt="" className="bill-icon" />
        <input
          type="text"
          placeholder="0"
          onChange={(e) => setnumpeopleValue(e.target.value)}
        />
      </div>
    </div>
  );
};
