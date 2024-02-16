import React, { useEffect, useRef, useState } from "react";
import { User } from "../Utils/types";

const Account = ({ data, updateUserBalance }) => {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    cardBalance: 0
  } as User); 

  const [transactionBuffer, setTransactionBuffer] = useState({
    debit: 0,
    credit: 0
  });

  const updateTransactionBuffer = (e):void => {
    setTransactionBuffer({ ...transactionBuffer, [e.target.name]: e.target.value});
  }

  const updateFormValues = (e):void => {
    e.preventDefault();
    console.log(transactionBuffer.debit);
    var transactionValue = transactionBuffer.debit - transactionBuffer.credit
    updateUserBalance(data.email, transactionValue)
  }
  
  useEffect(() => {
    setFormValues(data);
    console.log(formValues);
    
  }, []);  

  return (
    <div className="account-view-wrapper">
      <div className="account-view-container">
        <h3 className="account-view-header"> Account View </h3>
        <p className="account-view-para">
          Everything that you'll ever need to know about your account can be found here.
          Simply scroll down, select the card that wish to make a transaction to, and fill
          the appropraite fields with your desired amounts. Click the submit button, and watch
          your balance be adjusted in real-time!
        </p>
      </div>
      <div className="account-cards-navbar">  
        <span className="account-cards">
          Card 1
        </span>
      </div>
      <div className="account-overview">
        <form className="account-options-list" onSubmit={updateFormValues}>
          <div className="account-option-container">
            <h3 className="account-options-header debit"> Debit</h3>
            <div className="account-options-input-container">
              <span className="account-option-type">Amount</span>
              <input className="account-options-input" name="debit" id="debit" value={transactionBuffer.debit} onChange={updateTransactionBuffer}  /> 
            </div>
            {/* <div className="account-options-submit-btn-container">
              <button className="account-options-submit-btn debit-btn" type="submit">Submit </button>
            </div> */}
          </div>
          <div className="account-option-container">
            <h3 className="account-options-header credit"> Credit</h3>
            <div className="account-options-input-container">
              <span className="account-option-type">Amount</span>
              <input className="account-options-input" name="credit" id="credit" value={transactionBuffer.credit} onChange={updateTransactionBuffer}  /> 
            </div>
            <div className="account-options-submit-btn-container">
              <button className="account-options-submit-btn credit-btn" type="submit"> Submit </button>
            </div>
          </div>
        </form>
        <div className="account-card-info">
          <div className="account-card-details">
            <h3 className="account-card-details-header"> Card Number</h3>
            <h3 className="account-card-details-header"> Card Name</h3>
            <h3 className="account-card-details-header"> Balance </h3>
          </div>
          <div className="account-card-values">
            <h1 className="account-card-details-value" > {data.cardNumber}</h1>
            <h1 className="account-card-details-value"> {data.name} </h1>
            <h1 className="account-card-details-value"> {data.cardBalance} </h1>
          </div>
        </div>
      </div>
      <div className="transaction-history">
        <h3 className="transaction-history-header">Transaction history</h3>
      </div>
    </div>
  );
};

export default Account;
