import { useEffect, useState } from "react";

export default function ViewItems() {

  const [items, setItems] = useState([]);

  // FETCHING ITEMS DATA
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:5000/item/view/all`);
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  });

  return (
    <div>
      {items && items.map((item) => <h1> {item.name} </h1>)}
    </div>
  );
}
