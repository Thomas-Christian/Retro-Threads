import React from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

export default function ViewItems({items}) {

  const navigate = useNavigate();

  return (

    <div id="itemContainer" className="h-full flex flex-wrap flex-row justify-evenly">

        {items && items.map((item) => 

          <div key={item._id} className="border-neutral-20 border rounded-lg bg-primary shadow-md m-4 w-64 md:w-96" onClick={() => {navigate(`/item/view/${item._id}`)}}> 

            <div className="p-2 flex flex-col items-center">

            <h2 className="text-xl font-bold text-secondary font-secondary w-full text-center px-2 capitalize"> {item.name} </h2>

              <div className="flex flex-row w-full text-center">

              <img className="object-cover object-bottom h-36 w-36 md:h-48 md:w-48 rounded-lg m-2 drop-shadow-lg" src={`${item.img[0]}`} alt="" />

              <div className="flex flex-col w-full justify-between"> 

              <p className="mt-2 font-normal text-tertiary font-primary lowercase italic">
              {item.description}
              </p>
            
            <button className="btn-primary h-6 mb-2" >

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
