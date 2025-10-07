import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
    <section>
    <header className="flex flex-col items-center">
      <div className="container mx-auto bg-black text-white justify-between items-center p-5">
        <nav className="flex justify-between  space-x-4">
          <div className="flex space-x-4">
            <label className="text-xl">NavBar</label>
            <label>Home</label>
            <label>Pricing</label>
            <label>About</label>
          </div>
          <div className=" flex space-x-2">
            <input type="text" placeholder="Search" className="bg-white"></input>
            <button className="text-blue-200">Search</button>
          </div>
        </nav>
      </div>
    </header>
    </section>
    <section>
    <header className="flex flex-col items-center rotate-180">
      <div className="container mx-auto bg-black text-white justify-between items-center p-5">
        <nav className="flex justify-between  space-x-4">
          <div className="flex space-x-4">
            <label className="text-xl">NavBar</label>
            <label>Home</label>
            <label>Pricing</label>
            <label>About</label>
          </div>
          <div className=" flex space-x-2">
            <input type="text" placeholder="Search" className="bg-white"></input>
            <button className="text-blue-200">Search</button>
          </div>
        </nav>
      </div>
    </header>
    </section>
    </div>
    
  );
}