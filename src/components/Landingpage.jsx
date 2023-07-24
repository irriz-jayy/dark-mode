import React, { useState, useEffect } from "react";
import chairlogo from "../assets/chairlogo.png";
import chair from "../assets/chair.png";
import "../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Landingpage() {
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

  const handleClick = (e) => {
    e.preventDefault();
    const emailInput = e.target.form.elements.email;

    if (!emailInput.value.trim()) {
      toast.error("Please enter your email address.");
    } else if (!isValidEmail(emailInput.value)) {
      toast.error("Invalid email format. Please enter a valid email address.");
    } else {
      toast.success("You will be notified.");
      emailInput.value = "";
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  return (
    <>
      <header className="h-[15vh] flex items-center justify-between px-4">
        <img src={chairlogo} alt="" className="h-20 w-20" />
        <p className="font-logo text-xl">FurniChar</p>
        <label htmlFor="toggle" className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            onChange={toggleDarkMode}
            checked={darkMode}
          />
          <div className="w-16 h-8 bg-gray-300 rounded-full">
            <div
              className={`h-8 w-8 bg-yellow-500 rounded-full absolute transition-transform ${
                darkMode ? "transform translate-x-8" : ""
              }`}
            />
          </div>
          <span
            className={`absolute inset-y-0 left-0 w-8 h-8 flex items-center justify-center transition-colors ${
              darkMode ? "text-yellow-500" : "text-gray-600"
            }`}
          >
            {darkMode ? "🌞" : "🌙"}
          </span>
        </label>
      </header>
      <div className="h-[85vh] flex flex-row font-bold font-poppin ">
        <div className="h-full w-1/2 flex justify-center items-center">
          <div className="flex flex-col w-3/4 justify-center items-center">
            <p className="text-gray-500 w-full text-left text-lg py-4">
              COMING SOON
            </p>
            <h1 className="w-full text-4xl text-left py-4">
              Get Notified About Our Store Opening
            </h1>
            <form className="w-full flex items-start h-20">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address *"
                className="p-4 mr-4 h-full outline outline-1 rounded-md bg-gray-500 bg-opacity-10 w-2/3"
              />
              <button
                onClick={handleClick}
                className="h-full w-1/3 bg-white text-orange-400 outline outline-1 rounded-md hover:bg-orange-400 hover:text-white"
              >
                Notify me
              </button>
            </form>
          </div>
        </div>
        <img src={chair} alt="" className="h-full w-1/2" />
      </div>
    </>
  );
}

export default Landingpage;
