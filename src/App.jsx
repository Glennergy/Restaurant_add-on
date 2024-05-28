import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav className="top-nav">
          <div>Home</div>
          <div>Tables</div>
          <div></div>
        </nav>
      </div>
    </>
  );
}

export default App;
