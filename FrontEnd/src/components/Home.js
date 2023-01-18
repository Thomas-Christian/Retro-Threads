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
      <>
        

        <div id="screen" className="w-full min-h-screen top-0 absolute flex flex-col items-center pl-[3.25rem]
        bg-scroll bg-hero bg-center bg-repeat animate-ltr-linear-infinite -z-20">

        <div id='logo' className='flex flex-col items-center z-10'>

        <h1 className='text-5xl sm:text-6xl tracking-wide font-lily-script text-center font-bold text-neutral-200 p-3 [text-shadow:_1px_5px_2px_black]' >  
        RetroThreads </h1>

        </div>

          <ViewItems setItems={setItems} items={items} />

          
          <div id="header" className="text-black">

              <h4 className="font-secondary text-center font-bold italic text-md leading-snug p-3 ">
                a marketplace for buying and selling vintage and secondhand
                fashion items
              </h4>

          </div>

        </div>

      </>
    );
}