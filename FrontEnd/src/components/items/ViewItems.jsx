import React from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

export default function ViewItems({items}) {

  const navigate = useNavigate();

  return (

    <div id="itemContainer" className="h-full flex flex-wrap flex-row justify-center">

        {items && items.map((item) => 

          <div className="rounded-lg bg-slate-200 shadow-md m-4 w-64"> 

            <div className="p-3 flex flex-col items-center">

            <h2 className="text-xl font-bold tracking-tight text-gray-900 font-secondary w-full underline underline-offset-4 text-center px-2"> {item.name} </h2>

              

              <div className="flex flex-row w-full text-center">

              <img className="object-cover object-bottom h-36 w-36 rounded-lg m-2" src={`${item.img[0]}`} alt="" />

              <div className="flex flex-col w-full justify-between"> 

              <p className="mt-2 font-normal text-gray-700 font-primary">
              {item.description}
              </p>
            
            <button className="btn-primary h-6 mb-2" 
                
                onClick={() => {navigate(`/item/view/${item._id}`)}}>

                    <p className="font-lily-script font-thin text-base"> View </p>

                    <FontAwesomeIcon className="pl-1.5" icon={faUpRightFromSquare} size='xs' />

            </button>

            </div>

            </div>

        </div>


          </div>
        )}
        
    </div>
  )
    
}
