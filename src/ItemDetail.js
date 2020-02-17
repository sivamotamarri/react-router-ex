import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Item() {
  useEffect(() => {
    fetchItem();
  }, []);
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get?itemId=c54d7ad-075f48a-b646b18-3e80640"
    );
    const item = await data.json();
    console.log("inside item");
    console.log(item);
  };
  return (
    <div>
      <h1>item</h1>
    </div>
  );
}

export default Item;
