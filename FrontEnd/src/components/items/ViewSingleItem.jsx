import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CurrentUser } from "../../contexts/CurrentUser";

export default function ViewSingleItem() {
  const { currentUser } = useContext(CurrentUser);
  const navigate = useNavigate();
  const params = useParams();

  const [selectedItem, setSelectedItem] = useState({});

  // FETCHING ITEMS DATA
  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(
        `http://localhost:5000/item/view/${params.id}`
      );
      const data = await response.json();
      setSelectedItem(data);
    };
    fetchItem();
  }, [setSelectedItem, params]);

  // ITEM DELETION
  async function deleteItem() {

    try {
      await fetch(`http://localhost:5000/item/delete/${params.id}`, {
        headers: {
          "Content-Type": ""
        },
      method: "DELETE",
      data: { 
        id: params.id
      }
      
    });
    navigate("/");
    } catch (error) {
      console.log(error)
    }
    
  }

  let itemImages;
  let userSection;

  if (selectedItem) {
    // CHICKING IF USER IS THE OWNER TO ALLOW EDITING OR DELETION
    userSection = (
      <div
        id="user-section"
        className="flex flex-col justify-center text-center m-2 w-[25%]"
      >
        <p className="font-normal text-gray-700 font-primary m-4">
          Owner's Page
        </p>
        <button
          className="btn-primary text-quaternary"
          onClick={() => {
            navigate(`/user/${selectedItem.user}`);
          }}
        >
          <p className="font-lily-script font-thin text-base"> User </p>
        </button>
      </div>
    );

    if (currentUser && currentUser.id === selectedItem.user) {
      userSection = (
        <div
          id="user-section"
          className="flex flex-col justify-center text-center m-2 w-[25%]"
        >
          <button
            className="btn-primary text-quaternary"
            onClick={() => deleteItem()}
          >
            <p className="font-lily-script font-thin text-base"> Delete </p>
          </button>
        </div>
      );
    }

    if (selectedItem.img) {
      itemImages = selectedItem.img.map((image) => (
        <img
          key={""}
          className="object-cover object-bottom flex-shrink max-w-[50rem] rounded-lg m-2"
          src={`${image}`}
          alt=""
        />
      ));
    }

    return (
      <div
        id="screen"
        className="w-full min-h-screen top-0 absolute flex flex-col items-center justify-center pl-[4.48rem] bg-scroll bg-hero bg-center bg-repeat -z-20"
      >
        <div
          id="itemContainer"
          className="h-full flex flex-col rounded-lg bg-secondary shadow-md "
        >
          <div id="images" className="flex flex-row justify-evenly px-3 pt-3">
            {itemImages}
          </div>

          <div
            id="item-details"
            className="flex flex-row w-full h-full justify-between"
          >
            <div className="flex flex-col w-[65%] m-6">
              <h2 className="text-2xl font-bold text-primary font-secondary w-full text-center py-2 capitalize">
                {selectedItem.name}
              </h2>

              <div className="flex flex-row h-full text-sm sm:text-base">
                <h1 className="font-normal text-gray-700 font-primary w-2/3 h-full space-y-3">
                  <p className="pb-3"> About The Item: </p>

                  <p> {selectedItem.description} </p>
                </h1>

                <h1 className="font-normal text-gray-700 font-primary w-1/3 h-full space-y-3">
                  <p className="pb-4"> Specific Details: </p>

                  <p> Style - {selectedItem.styleCategory} </p>
                  <p> Size - {selectedItem.size} </p>
                  <p> Color - {selectedItem.color} </p>
                </h1>
              </div>
            </div>

            {userSection}
          </div>
        </div>
      </div>
    );
  }

  while (!selectedItem) {
    return <h1 className="w-64 m-auto"> Loading... </h1>;
  }
}
