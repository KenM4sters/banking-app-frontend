import { useGSAP } from "@gsap/react";
import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Landing = () => {
  // state for is set to a particular index of sloganArray over time.
  const [slogan, setSlogan] = useState("Awesome");
  // state for the index of sloganArray that we want to set to slogan.
  const [sloganIndex, setSloganIndex] = useState(0);

  // slogan array of strings
  var sloganArray: Array<string> = ["Easy", "Simple", "Fast", "Helpful"];

  // Using useEffect here to call setSlogan on the first render, and on every render
  // that the slogan changes to create a loop.
  useEffect(() => {
    const id = window.setTimeout(() => {
      // the & (modulus) operator returns the remainder of the division between two numbers,
      // so in this case it will return 3 (1/4) through to 1 (5/4).
      setSloganIndex((sloganIndex + 1) % sloganArray.length);
    }, 4000);
    gsap.to(".dynamic-slogan", { opacity: 0, scale: 0 }).duration(1);
    // another timeout to alllow for a gap between GSAP animations and ensure that the
    // new slogan doesn't change while on screen.
    window.setTimeout(() => {
      setSlogan(sloganArray[sloganIndex]);
      gsap.to(".dynamic-slogan", { opacity: 1, scale: 1 }).duration(1);
    }, 1000);
    return () => {
      clearInterval(id); // removes React warning when gets unmounted
    };
  }, [sloganIndex]);

  return (
    <section className="landing-wrapper">
      <div className="landing-container">
        <h1 className="landing-title">BANKING APP</h1>
        <h3 className="dynamic-slogan">{slogan}</h3>
        <p className="landing-para">
          Welcome to the banking app - a simplistic solution to online banking.
          Below, you'll find our quick links for an even faster experience with
          us.
        </p>
      </div>
    </section>
  );
};

export default Landing;
