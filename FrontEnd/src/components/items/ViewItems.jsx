import React, { useEffect } from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

export default function ViewItems({items, setItems}) {

  const navigate = useNavigate();

  // FETCHING ITEMS DATA
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:5000/item/view/all`);
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  },[setItems]);

  return (

    <div id="itemContainer" className="flex flex-wrap flex-row justify-center">

        {items && items.map((item) => 

          <div className="rounded-lg shadow-lg bg-slate-200 mx-6 mb-6"> 

            <div className="p-3 flex flex-col items-center">

              <img className="object-cover object-bottom h-52 w-52 rounded-lg mx-2" src={`${item.img[0]}`} alt="" />

              <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-secondary"> {item.name} </h2>
            

            <p className="mb-3 font-normal text-gray-700 font-primary">
              {item.description}
            </p>

            <button className="btn-primary" 
                
                onClick={() => {navigate(`/item/view/${item._id}`)}}>

                    <p className="font-lily-script font-thin text-base"> View </p>

                    <FontAwesomeIcon className="pl-1.5" icon={faUpRightFromSquare} size='xs' />

            </button>

        </div>


          </div>
        )}
        
    </div>
  )
    
}
