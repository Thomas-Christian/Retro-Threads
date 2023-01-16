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

    <div className="flex flex-row h-full items-center justify-center m-1 px-6 py-8">

        {items && items.map((item) => 

          <div className="rounded-lg shadow-lg bg-white max-w-sm"> 

            <img className="object-cover objeect-center h-48 w-96 rounded-t-lg" src={`${item.img[0]}`} alt="" />

            <div className="p-5">
            
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"> {item.name} </h5>
            

            <p className="mb-3 font-normal text-gray-700">
              {item.description}
            </p>

            <button className="btn-primary" 
                
                onClick={() => {navigate(`/item/view/${item._id}`)}}>
                    Check it Out

                    <FontAwesomeIcon className="px-1" icon={faUpRightFromSquare} fixedWidth />

            </button>

        </div>


          </div>
        )}
        
    </div>
  )
    
}
