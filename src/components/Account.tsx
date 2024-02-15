import React, { useEffect, useRef, useState } from "react";

const Account = ({ data }) => {
  const [activeCard, setActiveCard] = useState({});
  const [activeCardColors, setActiveCardColors] = useState([{}]);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  
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
      {
        backgroundColor: "#9ad3fd",
        boxShadow: "0px 0px 10px #9ad3fd",
      },
      {
        backgroundColor: "#9ad3fd",
        boxShadow: "0px 0px 10px #9ad3fd",
      },
    ]);
  }, []);


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
              toggleActiveCard(10);
            }}
            className="account-cards"
            key={index}
            style={activeCardColors[index]}
          >
            Card [{index}]
          </span>
        ))}
      </div>
      <div className="account-overview">
        <form className="account-options-list">
          <input />
          <input />
          <input />
          <input />
        </form>
        <div className="account-card-details">
          <h3 className="account-card-details-header">Card Number</h3>
          <h3 className="account-card-details-header"> Card Name</h3>
          <h3 className="account-card-details-header"> Balance </h3>
        </div>
      </div>
      <div className="transaction-history">
        <h3 className="transaction-history-header">Transaction history</h3>
      </div>
    </div>
  );
};

export default Account;
