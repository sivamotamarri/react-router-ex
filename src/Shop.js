import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items1 = await data.json();
    console.log("hello items");
    console.log(items1["data"]);
    setItems(items1["data"]);
  };
  return (
    <div className="shop">
      {items.map(item => (
        <h1 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
