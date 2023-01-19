import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ViewItems from "./items/ViewItems";

import { HideOn } from 'react-hide-on-scroll'

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
        bg-scroll bg-hero bg-center bg-repeat -z-20">

          <div id='header' className='flex flex-col items-center my-3 z-10'>

            <h1 id="logo" className='text-5xl sm:text-8xl tracking-wide font-lily-script text-center font-bold text-primary p-3 [text-shadow:_1px_5px_2px_black]' >  
            RetroThreads </h1>

          </div>




        <div id="top-half" className="w-full h-full flex flex-row flex-wrap justify-evenly mt-[10%] mb-[15%]">

          <div id="default-carousel" className="container flex w-[60%] overflow-hidden bg-primary bg-opacity-80 rounded-lg items-center m-4">

            <div className="carousel-items flex flex-row items-center w-full h-min animate-carousel transform-gpu"> 

              <div className="carousel-focus h-56 w-56 flex items-center justify-center flex-row relative bg-secondary mr-16 p-3 rounded-lg"> 
                <div className="bg-slide-1 h-48 w-48 z-20 rounded-lg" />
              </div>

              <div className="carousel-focus h-56 w-56 flex items-center justify-center flex-row relative bg-tertiary mr-8 p-3 rounded-lg"> 
                <div className="bg-slide-2 h-48 w-48 z-20 rounded-lg" />
              </div>

              <div className="carousel-focus h-56 w-56 flex items-center justify-center flex-row relative bg-secondary ml-8 p-3 rounded-lg"> 
                <div className="bg-slide-3 h-48 w-48 z-20 rounded-lg" />
              </div>

              <div className="carousel-focus h-56 w-56 flex items-center justify-center flex-row relative bg-tertiary ml-16 p-3 rounded-lg"> 
                <div className="bg-slide-4 h-48 w-48 z-20 rounded-lg" />
              </div>
                
            </div>

              
          </div>

          <div id="search" className="flex flex-col h-full m-4 p-2 border sticky
           border-neutral-200 rounded-lg bg-quaternary bg-opacity-80 justify-around"> 

              <h1 className="text-2xl text-center font-primary font-bold p-3 text-primary"> Search By Style </h1>
              
                     <button className="h-12 btn-primary bg-primary w-24 my-2">
                       <p className="w-full text-center font-secondary font-thin text-xs md:text-base text-secondary"> Vintage </p>
                     </button>
     
                     <button className="h-12 btn-primary bg-primary 100 w-24 my-2">
                       <p className="w-full text-center font-secondary font-thin text-xs md:text-base text-secondary"> Y2K </p>
                     </button>
     
                     <button className="h-12 btn-primary bg-primary w-24 my-2">
                       <p className="w-full text-center font-secondary font-thin text-xs md:text-base text-secondary"> Streetwear </p>
                     </button>
     
                     <button className="h-12 btn-primary bg-primary w-24 my-2">
                       <p className="w-full text-center font-secondary font-thin text-xs md:text-base text-secondary"> Designer </p>
                     </button>
     
          </div>
          
          <HideOn height={120}> 
          <FontAwesomeIcon className="fixed bottom-8 animate-bounce invisible xl:visible" icon={faArrowDown} size="3x" />
          </HideOn>

        </div>






        <div id="new-listings" className="bg-quintiary flex flex-col mx-3 mt-[5%] mb-[15%] p-2 rounded-md bg-opacity-80 w-min md:w-[85%] border-neutral-20 border">

            <h1 className="text-4xl w-full text-center font-secondary font-extrabold p-3 text-primary"> Newest Listings </h1>

          <ViewItems setItems={setItems} items={items} />
        </div>




          <div id="footer" className="text-primary [text-shadow:_1px_1px_1px_white]">

                <h4 className="font-secondary text-center font-bold italic text-md lg:text-xl leading-snug p-3 ">
                  a marketplace for buying and selling vintage and secondhand
                  fashion items
                </h4>

          </div>

        </div>

      </>
    );
}