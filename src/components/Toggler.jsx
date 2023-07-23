import React, { useState, useEffect } from "react";
import "../App.css";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

function Toggler() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <div className="toggler">
      {darkMode ? (
        <button onClick={toggleDarkMode} className="button">
          Make it sunny
        </button>
      ) : (
        <button onClick={toggleDarkMode} className="button">
          Make it dark
        </button>
      )}

      {darkMode ? (
        <img src={moon} className="moon" />
      ) : (
        <img src={sun} className="sun" />
      )}
    </div>
  );
}

export default Toggler;
