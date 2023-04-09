import React from 'react'

import './Rightdiv.css'

export const Rightdiv = () => {
  return (
    <div className="main-rightdiv">
      <div className="tip-amount">
        <div>
          <p className="title">Tip Amount</p>
          <p className="person">/ person</p>
        </div>
        <div>
          <h1>$0.00</h1>
        </div>
      </div>
      <div className="total">
        <div>
          <p className="title">Total</p>
          <p className="person">/ person</p>
        </div>
        <div>
          <h1>$0.00</h1>
        </div>
      </div>
      <button className="reset-btn">Reset</button>
    </div>
  );
}