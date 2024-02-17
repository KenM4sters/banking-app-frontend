import React, { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { Cog6ToothIcon } from "@heroicons/react/16/solid";
import DevReview from "./DevReview";
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
      gsap.to(".main-container", {opacity: 0.1});
    } else {
      gsap.to(".dev-review-wrapper", { opacity: 0, scale: 0})
      gsap.to(".dev-view-icon", { rotateZ: "-90deg" });
      gsap.to(".main-container", {opacity: 1.0});
    }
  };

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
      <DevReview toggleDevIcon={toggleDevIcon}/>
      </>
  );
};

export default Header;
