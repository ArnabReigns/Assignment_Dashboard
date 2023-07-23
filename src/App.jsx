import { useState } from "react";
import "./App.scss";
import Appbar from "./components/Appbar";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import { Fab } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Appbar />
      <One />
      <Two />
      <Three />
    </div>
  );
}

export default App;
