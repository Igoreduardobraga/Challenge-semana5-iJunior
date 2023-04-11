import { Rightdiv } from "./Components/Rightdiv";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import "./App.css";
import "./Components/Rightdiv.css";
import imagemDollar from "./images/icon-dollar.svg";
import imagemPerson from "./images/icon-person.svg";

export function App() {
  const [billValue, setbillValue] = useState("");
  const [numpeopleValue, setnumpeopleValue] = useState("");
  const [tipValue, settipValue] = useState("");

  const tipRef = useRef();
  const peopleRef = useRef();
  const billRef = useRef();

  function resetleftdiv() {
    setbillValue(0);
    setnumpeopleValue(0);
    settipValue(0);
    billRef.current.value = "";
    tipRef.current.value = "";
    peopleRef.current.value = "";
  }

  function verifyBill() {
    if (/^[0-9]*\.?[0-9]*$/.test(billValue) || billValue === "") {
      return true;
    } else return false;
  }

  function verifyPeople() {
    if (/^[0-9]+$/.test(numpeopleValue) || numpeopleValue === "") {
      return true;
    } else return false;
  }

  return (
    <div className="App">
      <h1>
        Spli <br /> tter
      </h1>
      <div className="container">
        <div className="main-leftdiv">
          <div className="bill">
            <div className="titles">
              <p className="bill">Bill</p>
              {!verifyBill() && <p className="alerta">Enter a valid value</p>}
            </div>
            <img src={imagemDollar} alt="" className="bill-icon" />
            <input
              type="text"
              placeholder="0"
              onChange={(e) => setbillValue(e.target.value)}
              ref={billRef}
            />
          </div>

          <div className="tip">
            <p className="select-tip">Select Tip %</p>
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
                onChange={(e) => settipValue(0.01 * e.target.value)}
                ref={tipRef}
              />
            </div>
          </div>
          <div className="number-people">
            <div className="titles">
              <p className="number-of-people">Number of People</p>
              {!verifyPeople() && <p className="alerta">Enter a valid value</p>}
            </div>
            <img src={imagemPerson} alt="" className="bill-icon" />
            <input
              type="text"
              placeholder="0"
              onChange={(e) => setnumpeopleValue(e.target.value)}
              ref={peopleRef}
            />
          </div>
        </div>
        <Rightdiv
          resetleftdiv={resetleftdiv}
          tipValue={tipValue}
          billValue={billValue}
          numpeopleValue={numpeopleValue}
        />
      </div>
    </div>
  );
}
