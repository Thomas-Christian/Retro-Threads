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
                      
            <img key={''} className="object-cover object-bottom flex-shrink w-[50rem] rounded-lg m-2" src={`${image}`} alt="" /> 
        )
        }

    return (

          <div id="screen" className="w-full min-h-screen top-0 absolute flex flex-col items-center justify-center pl-[3.25rem]
          bg-scroll bg-hero bg-center bg-repeat -z-20"> 

            <div id="itemContainer" className="h-full flex flex-col rounded-lg bg-secondary shadow-md ">
        
                  
                    
        
                      <div id="images" className="flex flex-row justify-evenly px-3 pt-3">

                        {itemImages}

                      </div> 
        
                      <div id="item-details" className="flex flex-row w-full h-full justify-between"> 

                        <div className="flex flex-col w-[65%] m-6"> 

                        <h2 className="text-2xl font-bold text-primary font-secondary w-full text-center py-2 capitalize"> {selectedItem.name} </h2>

                          <div className="flex flex-row h-full text-sm sm:text-base">
                          <h1 className="font-normal text-gray-700 font-primary w-2/3 h-full space-y-3">
                            
                            <p className="pb-3"> About The Item: </p>

                            <p> { selectedItem.description} </p>
                          </h1>

                          <h1 className="font-normal text-gray-700 font-primary w-1/3 h-full space-y-3">
                            <p className="pb-4"> Specific Details: </p>

                            <p> Style - {selectedItem.styleCategory} </p>
                            <p> Size - {selectedItem.size} </p> 
                            <p> Color - {selectedItem.color} </p>
                                
                          </h1>

                          </div>

                          

                        </div>

                        <div className="flex flex-col justify-center text-center m-2 w-[25%]">

                          <p className="font-normal text-gray-700 font-primary m-4"> Owner's Page </p> 
                          <button className="btn-primary text-quaternary" 
                        
                        onClick={() => {navigate(`/user/${selectedItem.user}`)}}>
        
                            <p className="font-lily-script font-thin text-base"> User </p>
        
                          </button>
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
