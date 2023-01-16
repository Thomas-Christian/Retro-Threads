import React, { useEffect, useState } from "react";
import ViewItems from "./items/ViewItems";

export default function Home() {

    const [items, setItems] = useState([]);
    

// FETCHING ITEMS DATA
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:5000/item/view/home`);
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  }, [setItems]);



    return (

      <div className="flex flex-col mt-8 ml-[3.25rem] items-center justify-center px-6 py-8">

        <ViewItems 
        setItems = {setItems} 
        items = {items} />

        <div class="text-black text-center relative bottom-3">

          <h4 class="font-semibold uppercase text-lg leading-snug mb-6">
            A marketplace for buying and selling vintage and secondhand fashion items
          </h4>

          <button className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5"> 
            Learn More
          </button>
        </div>

      </div>
        
        
    )
}