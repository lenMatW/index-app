// Updated App.js
import React, { useState } from "react";
import "./App.css";
import { Swap, Stake, Withdraw, Gas } from "@swing.xyz/ui";
import "@swing.xyz/ui/theme.css";
import Navbar from "./NavBar";

function App() {
  const [currentView, setCurrentView] = useState("Swap");

  const handleNavClick = (view) => {
    setCurrentView(view);
  };

  const renderComponent = () => {
    switch (currentView) {
      case "Swap":
        return <Swap className="function-card" projectId="in-dex" />;
      case "Stake":
        return <Stake className="function-card" projectId="in-dex" />;
      case "Withdraw":
        return <Withdraw projectId="in-dex" />;
      case "Gas":
        return <Gas projectId="in-dex" />;
      default:
        return <Swap projectId="in-dex" />;
    }
  };

  return (
    <div className="">
      <div className="App">
        <header className="App-header">
          <Navbar onNavClick={handleNavClick} />
        </header>
        <main className="main-body">{renderComponent()}</main>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default App;
