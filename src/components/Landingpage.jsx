import React from "react";

function Landingpage() {
  return (
    <>
      <header className="border border-2 border-red-800 h-[15vh] flex">
        <img src="" alt="" className="" />
        <button className="h-8 p-2 text-sm">Toggler</button>
      </header>
      <div className="h-[80vh] font-bold">
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
                type="text"
                placeholder="Enter your email address *"
                className="p-4 mr-4 h-full outline outline-1 rounded-md bg-gray-500 bg-opacity-10 w-2/3"
              />
              <button className="h-full w-1/3 bg-white text-orange-400 outline outline-1 rounded-md hover:bg-orange-400 hover:text-white">
                Notify me
              </button>
            </form>
          </div>
        </div>
        <img src="" alt="" />
      </div>
    </>
  );
}

export default Landingpage;
