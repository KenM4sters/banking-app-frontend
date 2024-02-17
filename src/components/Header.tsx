import React, { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { Cog6ToothIcon } from "@heroicons/react/16/solid";
import gsap from "gsap";

const Header = ({ toggleForm, userEnabled, resetUser, toggleView }) => {
  const [devView, setDevView] = useState(false);

  const signOutUser = (lookToHome: boolean):void => {
    toggleView(lookToHome);
    resetUser();
    console.log(userEnabled);
  };

  const toggleDevIcon = (show: boolean):void => {
    if (show) {
      gsap.to(".dev-view-icon", { rotateZ: "90deg" });
      gsap.to(".dev-review-wrapper", { opacity: 1, scale: 1})
    } else {
      gsap.to(".dev-review-wrapper", { opacity: 0, scale: 0})
      gsap.to(".dev-view-icon", { rotateZ: "-90deg" });
    }
  };

  useEffect(() => {
    gsap.to(".dev-review-wrapper", { opacity: 0, scale: 0})
  }, [])

  return (
    <>
      <div className="header-wrapper">
        <div
          className="dev-view-container"
          onClick={() => {
            toggleDevIcon(true);
          }}
        >
          <Cog6ToothIcon className="dev-view-icon" />
        </div>
        <div className="header-container">
          {userEnabled ? (
            <div>
              <span
                className="btn login-btn "
                onClick={() => {
                  signOutUser(true);
                }}
              >
                Sign Out
              </span>
            </div>
          ) : (
            <button
              onClick={() => {
                toggleForm(true);
              }}
              className="btn login-btn"
            >
              Login
            </button>
          )}
        </div>
      </div>

      <div className="dev-review-wrapper close-dev-review">
        <div className="dev-review-container">
          <div className="dev-review-header-container">
            <h1>Dev Review</h1>
            <h6 onClick={() => {toggleDevIcon(false)}}>close</h6>
          </div>
          <div className="dev-review-body">
            <h3> What went well </h3>
            <ul className="dev-review-summary">
              <li>[point]</li>
              <li>[point]</li>
              <li>[point]</li>
              <li>[point]</li>
              <li>[point]</li>
            </ul>
            <h3> Areas to improve on </h3>
            <ul className="dev-review-summary">
              <li>[point]</li>
              <li>[point]</li>
              <li>[point]</li>
              <li>[point]</li>
              <li>[point]</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              excepturi unde atque hic iste labore sint expedita inventore maiores
              magnam deleniti ipsum magni, repellendus nostrum quisquam quam
              voluptatibus praesentium officiis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
