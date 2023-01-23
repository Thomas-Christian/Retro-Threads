import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
  faHouseChimney,
  faSquarePlus,
  faShop,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

export default function Navigation() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUser);

  let loginActions = (
    <div className="text-center">
      <li className="py-3 group">
        <button className="nav-btn" onClick={() => navigate("/users/login")}>
          <FontAwesomeIcon icon={faRightToBracket} className="nav-icon" />

          <span className="tooltip-text z-1">Login </span>
        </button>
      </li>

      <li className="py-3 group">
        <button className="nav-btn" onClick={() => navigate("/users/sign-up")}>
          <FontAwesomeIcon icon={faUserPlus} className="nav-icon" />

          <span className="tooltip-text z-1">Sign-Up </span>
        </button>
      </li>
    </div>
  );

  let appRoutes = (
    <div id="appRoutes" className="text-center absolute bottom-1">
      <li id="home" className="py-3 group">
        <button className="nav-btn" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHouseChimney} className="nav-icon" />

          <span className="tooltip-text z-1">Home </span>
        </button>
      </li>

      <li id="viewAll" className="py-3 group">
        <button
          className="nav-btn"
          onClick={() => {
            navigate("/items/view/all");
          }}
        >
          <FontAwesomeIcon icon={faShop} className="nav-icon" />

          <span className="tooltip-text z-1">Shop </span>
        </button>
      </li>
    </div>
  );

  // CHANGE WHATS SHOWED WHEN LOGGED IN
  if (currentUser) {
    const userID = currentUser.id;

    loginActions = (
      <div className="text-center">
        <li className="py-3 group">
          <button
            className="nav-btn"
            onClick={() => navigate(`/users/${userID}`)}
          >
            <FontAwesomeIcon icon={faAddressCard} className="md:h-10 md:w-10 h-4" />

            <span className="tooltip-text z-1">View Profile </span>
          </button>
        </li>

        <li className="py-3 group">
          <button
            className="nav-btn"
            onClick={() => {
              setCurrentUser(null);
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faCircleMinus} className="nav-icon" />

            <span className="tooltip-text z-1">Logout </span>
          </button>
        </li>
      </div>
    );

    appRoutes = (
      <div id="appRoutes" className="text-center absolute bottom-1">
        <li id="home" className="py-3 group">
          <button className="nav-btn" onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faHouseChimney} className="md:w-10 w-4" />

            <span className="tooltip-text z-1">Home </span>
          </button>
        </li>

        <li id="newItem" className="py-3 group">
          <button
            className="nav-btn"
            onClick={() => {
              navigate("/item/new");
            }}
          >
            <FontAwesomeIcon icon={faSquarePlus} className="nav-icon" />

            <span className="tooltip-text z-1">New item </span>
          </button>
        </li>

        <li id="viewAll" className="py-3 group">
          <button
            className="nav-btn"
            onClick={() => {
              navigate("/item/view/all");
            }}
          >
            <FontAwesomeIcon icon={faShop} className="nav-icon" />

            <span className="tooltip-text z-1">Shop </span>
          </button>
        </li>
      </div>
    );
  }

  return (
    <>
      <div
        id="sideNav"
        className="fixed top-0 left-0 z-20 min-h-screen px-2 py-2 flex flex-col bg-primary shadow-md"
      >
        <ul>
          {loginActions}
          {appRoutes}
        </ul>
      </div>
    </>
  );
}
