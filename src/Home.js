import React from "react";
import Tweet from "./Tweet";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <Tweet name="siva" message="Iam new the React project" likes="20" />
      <Tweet name="sravan" message="Already in the React project" likes="30" />
      <Tweet name="anil" message="I am from castlight" likes="90" />
    </div>
  );
}

export default Home;
