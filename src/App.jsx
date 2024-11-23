import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Mobile from "./Components/Mobile/Mobile";
import Television from "./Components/Television/television";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/television" element={<Television />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
