import React from "react";
import "./App.css";
import Layout from "./Container/Layout/Layout";
import Alphabet from "./Container/UI/Letters/Alphabet/Alphabet";
function App() {
  return (
    <div className="App">
      <Layout />
      <Alphabet style={{ fontSize: "25px", textAlign: "center" }}>h</Alphabet>
    </div>
  );
}

export default App;
