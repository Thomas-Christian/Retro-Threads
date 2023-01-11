import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {

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
        <>
        <h1> HOME PAGE </h1>
        <div>
        {items && items.map((item) => 
        <> 
        <h1> {item.name} </h1>
        <Link to={`/item/view/${item._id}`}> View </Link>
        </>
        )}
        </div>
        <Link to={'/item/new'}> Post Your Own </Link>
        </>
    )
}