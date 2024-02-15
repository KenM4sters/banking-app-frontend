import React, { useEffect, useRef, useState } from "react";

const Account = ({ data }) => {
  const [activeCard, setActiveCard] = useState({});
  const [activeCardColors, setActiveCardColors] = useState([{}]);
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  var refsArray = [];

  for( let i = 0; i < 10; i++) {
    var ref = useRef()
    refsArray[i] = ref;
  }
  
  useEffect(() => {
    setActiveCardColors([
      {
        backgroundColor: "#f60a4d",
        boxShadow: "0px 0px 10px #f60a4d",
      },
      {
        backgroundColor: "#9ad3fd",
        boxShadow: "0px 0px 10px #9ad3fd",
      },
    ]);
  }, []);

  const toggleActiveColor = (index) => {
    refsArray[index].current.style = activeCardColors[0];
    console.log(refsArray[index].current.style);
    
  }
  

  return (
    <div className="account-view-wrapper">
      <div className="account-view-container">
        <h3 className="account-view-header"> Account View </h3>
        <p className="account-view-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a
          rerum tenetur sapiente accusantium quam dignissimos modi ullam facere
          adipisci commodi provident pariatur ex totam neque quibusdam, quos
          cupiditate! Voluptatem!
        </p>
      </div>
      <div className="account-cards-navbar">
        {data?.content?.map((data, index: number) => (
          <span
            onClick={() => {
              toggleActiveColor(index);
            }}
            className="account-cards"
            key={index}
            ref={refsArray[index]}
          >
            Card [{index}]
          </span>
        ))}
      </div>
      <div className="account-overview">
        <form className="account-options-list">
          <div className="account-option-container">
            <h3 className="account-options-header debit"> Debit</h3>
            <div className="account-options-input-container">
              <span className="account-option-type">Amount</span>
              <input className="account-options-input" placeholder="0.00"  /> 
            </div>
            <div className="account-options-submit-btn-container">
              <button className="account-options-submit-btn debit-btn">Submit </button>
            </div>
          </div>
          <div className="account-option-container">
            <h3 className="account-options-header credit"> Credit</h3>
            <div className="account-options-input-container">
              <span className="account-option-type">Amount</span>
              <input className="account-options-input" placeholder="0.00"  /> 
            </div>
            <div className="account-options-submit-btn-container">
              <button className="account-options-submit-btn credit-btn">Submit </button>
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
            <h1 className="account-card-details-value"> [NUMBER] </h1>
            <h1 className="account-card-details-value"> [NAME] </h1>
            <h1 className="account-card-details-value"> [BALANCE] </h1>
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
