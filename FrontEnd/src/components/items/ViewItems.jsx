import React from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ViewItems({items}) {
  const navigate = useNavigate();
  const [allItems, setAllItems] = useState([]);

  // FETCHING ITEM(S) DATA
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}api/items/view/all`);
      
      const data = await response.json();
      setAllItems(data);
    };
    fetchItems();
  }, [setAllItems]);

  // CHECK IF ON HOMEPAGE OR VIEWALL TO CENTER DIV OR NOT
  if (window.location.pathname === "/items/view/all") {
    return (
      <div className="flex flex-col h-screen md:pl-[4.48rem] pl-[3rem] items-center justify-center px-6 py-8">
        <h1
          id="logo"
          className="text-5xl sm:text-8xl tracking-wide font-lily-script text-center font-bold text-primary p-3 pb-6 [text-shadow:_1px_5px_2px_black]"
        >
          All Items
        </h1>
        <div
          id="itemContainer"
          className="h-full flex flex-wrap flex-row justify-evenly items-center"
        >
          {allItems &&
            allItems.map((item) => (
              <div
                key={item._id}
                className="border-neutral-20 border rounded-lg bg-primary shadow-md m-4 h-min w-64 md:w-96"
                onClick={() => {
                  navigate(`/items/view/${item._id}`);
                }}
              >
                <div className="p-2 flex flex-col items-center">
                  <h2 className="text-xl font-bold text-secondary font-secondary w-full text-center px-2 capitalize">
                    {item.name}
                  </h2>

                  <div className="flex flex-row w-full text-center">
                    <img
                      className="object-cover object-bottom h-36 w-36 md:h-48 md:w-48 rounded-lg m-2 drop-shadow-lg"
                      src={`${item.img[0]}`}
                      alt=""
                    />

                    <div className="flex flex-col w-full justify-between">
                      <p className="mt-2 font-normal text-tertiary font-primary lowercase italic">
                        {item.description}
                      </p>

                      <button className="btn-primary h-6 mb-2">
                        <p className="font-lily-script font-thin text-base">
                          View
                        </p>

                        <FontAwesomeIcon
                          className="pl-1.5"
                          icon={faUpRightFromSquare}
                          size="xs"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="itemContainer"
        className="h-full flex flex-wrap flex-row justify-evenly"
      >
        {items &&
          items.map((item) => (
            <div
              key={item._id}
              className="border-neutral-20 border rounded-lg bg-primary shadow-md m-4 w-64 md:w-96"
              onClick={() => {
                navigate(`/items/view/${item._id}`);
              }}
            >
              <div className="p-2 flex flex-col items-center">
                <h2 className="text-xl font-bold text-secondary font-secondary w-full text-center px-2 capitalize">
                  {item.name}
                </h2>

                <div className="flex flex-row w-full text-center">
                  <img
                    className="object-cover object-bottom h-36 w-36 md:h-48 md:w-48 rounded-lg m-2 drop-shadow-lg"
                    src={`${item.img[0]}`}
                    alt=""
                  />

                  <div className="flex flex-col w-full justify-between">
                    <p className="mt-2 font-normal text-tertiary font-primary lowercase italic">
                      {item.description}
                    </p>

                    <button className="btn-primary h-6 mb-2">
                      <p className="font-lily-script font-thin text-base">
                        View
                      </p>

                      <FontAwesomeIcon
                        className="pl-1.5"
                        icon={faUpRightFromSquare}
                        size="xs"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
