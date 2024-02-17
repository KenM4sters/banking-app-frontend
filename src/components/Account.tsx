import React, { useEffect, useRef, useState } from "react";
import { User } from "../Utils/types";
import { Transaction } from "../Utils/types";
import { TransactionType } from "../Utils/types";

const Account = ({ data, updateUserBalance }) => {
  // eventhough our form doesn't contain name,email, or password fields, we will need them
  // to update the state of the user.
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    cardBalance: 0,
  } as User);

  // an array of individual transaction objects, which we'll map over in the transaction section.
  const [transactions, setTransactions] = useState([{} as Transaction]);

  // to store the transcations and allow a net value to be calculated.
  const [transactionBuffer, setTransactionBuffer] = useState({
    debit: 0,
    credit: 0,
  });

  // udpates the buffer when the transaciton field inputs are changed.
  const updateTransactionBuffer = (e): void => {
    // set the buffer to the updated field values.
    setTransactionBuffer({
      ...transactionBuffer,
      [e.target.name]: e.target.value,
    });
  };

  const updateFormValues = (e): void => {
    // prevent default behaviour of submitting a form, otherwise the browser will refresh.
    e.preventDefault();
    // calculate value to update the state of the balance by.
    var transactionValue = transactionBuffer.debit - transactionBuffer.credit;

    // initalize a new Transaction with the transaction details.
    var transactionItem = {
      netAmount: transactionValue,
      isDebit: transactionValue >= 0 ? true : false,
      finalBalance: data.cardBalance + transactionValue,
      date: Date.now().toString(),
    } as Transaction;

    // update transactions to include the new transaction object.
    setTransactions([
      // previous values
      ...transactions,
      // append new values
      transactionItem,
    ]);

    // call function to update the state of the balance.
    updateUserBalance(data.email, transactionValue);
  };

  // set the form values to contain the data that's taken in from App.tsx to get the user details.
  useEffect(() => {
    setFormValues(data);
  }, []);

  return (
    <div className="account-view-wrapper">
      <div className="account-view-container">
        <h3 className="account-view-header"> Account View </h3>
        <p className="account-view-para">
          Everything that you'll ever need to know about your account can be
          found here. Simply scroll down, select the card that wish to make a
          transaction to, and fill the appropraite fields with your desired
          amounts. Click the submit button, and watch your balance be adjusted
          in real-time!
        </p>
      </div>
      <div className="account-cards-navbar">
        <span className="account-cards">Card 1</span>
      </div>
      <div className="account-overview">
        <form className="account-options-list" onSubmit={updateFormValues}>
          <div className="account-option-container">
            <h3 className="account-options-header debit"> Debit</h3>
            <div className="account-options-input-container">
              <span className="account-option-type">Amount</span>
              <input
                className="account-options-input"
                name="debit"
                id="debit"
                value={transactionBuffer.debit}
                onChange={updateTransactionBuffer}
              />
            </div>
            {/* <div className="account-options-submit-btn-container">
              <button className="account-options-submit-btn debit-btn" type="submit">Submit </button>
            </div> */}
          </div>
          <div className="account-option-container">
            <h3 className="account-options-header credit"> Credit</h3>
            <div className="account-options-input-container">
              <span className="account-option-type">Amount</span>
              <input
                className="account-options-input"
                name="credit"
                id="credit"
                value={transactionBuffer.credit}
                onChange={updateTransactionBuffer}
              />
            </div>
            <div className="account-options-submit-btn-container">
              <button
                className="account-options-submit-btn credit-btn"
                type="submit"
              >
                {" "}
                Submit{" "}
              </button>
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
            <h1 className="account-card-details-value"> {data.cardNumber}</h1>
            <h1 className="account-card-details-value"> {data.name} </h1>
            <h1 className="account-card-details-value"> {data.cardBalance} </h1>
          </div>
        </div>
      </div>
      <div className="transaction-history-wrapper">
        <div className="transaction-history-container">
          <div className="transaction-history-headings" style={{color: "Ivory"}}>
            <h6 className="transaction-headings-cell">Value</h6>
            <h6 className="transaction-headings-cell">Type</h6>
            <h6 className="transaction-headings-cell">Final Balance</h6>
            <h6 className="transaction-headings-cell">Date</h6>
          </div>
          {/* The first object doesn't contain anything, but will use up space in the form
              and cause data.isEnable to return false in it's own row, so we
              return null if the index is 0*/}
          {transactions.map((data, index) =>
            index == 0 || index > 7 ? null : (
              <div key={index} className="transaction-item">
                <h6 className="transaction-item-cell" style={{color: data.isDebit == true ? "GreenYellow" : "red"}}>{data.netAmount}</h6>
                <h6 className="transaction-item-cell" style={{color: data.isDebit == true ? "cyan" : "LightCoral"}}>{`${data.isDebit}`}</h6>
                <h6 className="transaction-item-cell" style={{color: "white"}}>{data.finalBalance}</h6>
                <h6 className="transaction-item-cell" style={{color: "Ivory"}}>{data.date}</h6>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
