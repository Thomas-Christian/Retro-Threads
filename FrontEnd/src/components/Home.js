import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        
        <div id="screen" className="w-full min-h-screen top-0 absolute flex flex-col items-center justify-between pl-[3.25rem]
        bg-scroll bg-hero bg-center bg-repeat animate-ltr-linear-infinite -z-20">

          <div id='header' className='flex flex-col items-center z-10'>

            <h1 id="logo" className='text-5xl sm:text-8xl tracking-wide font-lily-script text-center font-bold text-neutral-200 p-3 [text-shadow:_1px_5px_2px_black]' >  
            RetroThreads </h1>

          </div>

          <div className="w-full h-full flex flex-row flex-wrap justify-around">


          <div id="new-listings" className="bg-white flex flex-col my-2 p-3 rounded-md bg-opacity-70 w-min lg:w-max">

            <h1 className="text-4xl w-full text-center font-secondary font-semibold p-3"> Newest Listings </h1>

          <ViewItems setItems={setItems} items={items} />
          </div>

          <div id="search" class="flex flex-col my-2 p-2 border sticky top-6 border-gray-300 rounded-lg bg-gray-500 bg-opacity-80 justify-around max-h-[20rem]"> 

              <h1 className="text-2xl w-full text-center font-secondary font-semibold p-3"> Search By Style </h1>
                     
                     <button class="h-12 btn-primary bg-slate-100 w-24">
                       <p className="w-full text-center font-secondary font-thin text-xs md:text-base"> Vintage </p>
                     </button>
     
                     <button class="h-12 btn-primary bg-slate-100 w-24">
                       <p className="w-full text-center font-secondary font-thin text-xs md:text-base"> Y2K </p>
                     </button>
     
                     <button class="h-12 btn-primary bg-slate-100 w-24">
                       <p className="w-full text-center font-secondary font-thin text-xs md:text-base"> Streetwear </p>
                     </button>
     
                     <button class="h-12 btn-primary bg-slate-100 w-24">
                       <p className="w-full text-center font-secondary font-thin text-xs md:text-base"> Designer </p>
                     </button>
     
                   </div>

          </div>

          <div id="footer" className="text-black">

                <h4 className="font-secondary text-center font-bold italic text-md leading-snug p-3 ">
                  a marketplace for buying and selling vintage and secondhand
                  fashion items
                </h4>

          </div>

        </div>

      </>
    );
}