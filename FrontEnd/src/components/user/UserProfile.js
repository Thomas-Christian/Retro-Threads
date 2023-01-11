import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrentUser } from "../../contexts/CurrentUser";

export default function UserProfile() {
  const { currentUser } = useContext(CurrentUser);
  const [user, setUser] = useState([]);

  let params = useParams();
  let userID;

  // CHECKING IF LOGGED IN AS A USER
  const LoggedIn = () => {
    if (!currentUser) {
      userID = params.id;
    } else {
      userID = currentUser.id;
    }
  };
  LoggedIn();

  // FETCHING USER DATA
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:5000/user/${userID}`);
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [userID]);

  //console.log(user.items);

  return (
    <div>
      <h1>
        {user.firstName}
        {user.lastName}
      </h1>
      {user.items && user.items.map((item) => <h1> {item.name} </h1>)}
    </div>
  );
}
