import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function ViewSingleItem() {

  const navigate = useNavigate();
  const params = useParams();

  const [selectedItem, setSelectedItem] = useState({})

  // FETCHING ITEMS DATA
  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:5000/item/view/${params.id}`);
      const data = await response.json();
      setSelectedItem(data);
    };
    fetchItem();

  }, [setSelectedItem, params]);

    let itemImages

    if (selectedItem) {

        if (selectedItem.img) {
            
        itemImages = selectedItem.img.map((image) => 
                      
            <img key={''} className="object-cover object-bottom h-36 w-36 rounded-lg m-2" src={`${image}`} alt="" /> 
        )
        }

    return (

            <div id="itemContainer" className="h-full flex flex-wrap flex-row justify-center">
        
                  <div className="rounded-lg bg-slate-200 shadow-md m-4 w-72"> 
        
                    <div className="p-3 flex flex-col items-center">
        
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 font-secondary w-full underline underline-offset-4 text-center px-2"> {selectedItem.name} </h2>
        
                      <div className="flex flex-row w-full text-center">

                        {itemImages}
        
                      <div className="flex flex-col w-full justify-between"> 
        
                      <p className="mt-2 font-normal text-gray-700 font-primary">
                      {selectedItem.description}
                      </p>
                    
                    <button className="btn-primary h-6 mb-2" 
                        
                        onClick={() => {navigate(`/user/${selectedItem.user}`)}}>
        
                            <p className="font-lily-script font-thin text-base"> User </p>
        
                    </button>
        
                    </div>
        
                    </div>
        
                </div>
        
        
                  </div>
                
                
            </div>
          )
    }

    while (!selectedItem) {
        return (
            <h1 className="w-64 m-auto"> Loading... </h1>
        )
    }
    
}
