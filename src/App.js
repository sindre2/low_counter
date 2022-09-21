import "./App.css";
import { Home } from "./pages/HomePage";
import { Smiley } from "./pages/SmileyPage";
import { Spin } from "./pages/SpinPage";
import { Route, Link, Routes } from "react-router-dom";
import { ClockContext } from "./pages/Components/ClockContext";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="smiley">Smiley</Link>
          </li>
          <li>
            <Link to="spin">Spin</Link>
          </li>
        </ul>
      </nav>

      {/* ClockContext is made available for all the components inside the provider element. */}
      <ClockContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Smiley" element={<Smiley />} />
          <Route path="/Spin" element={<Spin />} />
        </Routes>
      </ClockContext.Provider>
    </>
  );
}

export default App;
