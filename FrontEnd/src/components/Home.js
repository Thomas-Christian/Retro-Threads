import React, { useEffect, useState } from "react";
import ViewItems from "./items/ViewItems";

// import backgroundImage from '../images/42331.jpg'

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
      <>
        
        {/* bg-cover bg-repeat bg-center bg-fixed bg-[url('./images/42331.jpg')] */}
        
        <div id="screen" className="h-full w-full top-0 absolute flex flex-col items-center pl-[3.25rem] justify-evenly" >

          

          <div id="heroText" className="text-black bottom-10 relative w-[85%]">

            <h4 className="font-secondary text-center font-bold italic text-md leading-snug px-3 py-3">
              a marketplace for buying and selling vintage and secondhand
              fashion items
            </h4>

          </div>

          <ViewItems setItems={setItems} items={items} />

          

        </div>

      </>
    );
}