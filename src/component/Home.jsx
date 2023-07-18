import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [advice, setAdvice] = useState("");
  async function fetchAdvice() {
    const res = await axios.get("https://api.adviceslip.com/advice");
    const { advice } = res.data.slip;
    setAdvice(advice);
  }
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
