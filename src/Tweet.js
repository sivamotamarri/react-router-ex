import React, { useState } from "react";
import "./App.css";

function Tweet(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="tweet">
        <h3>{props.name} </h3>
        <p> {props.message}</p>
        <h3>Likes : {count} </h3>
      </div>
      <div className="counter">
        <button onClick={increment}>Like message</button>
      </div>
    </div>
  );
}

export default Tweet;
