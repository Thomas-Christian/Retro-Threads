import { useEffect, useState, useContext } from "react";
//import { useParams } from "react-router-dom";
import { CurrentUser } from '../../contexts/CurrentUser';

export default function UserProfile() {

    const { currentUser } = useContext(CurrentUser)
    const [user, setUser] = useState([]);
    const userID = currentUser.id
   
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:5000/user/${userID}`);
      const data = await response.json();
      setUser(data);
    }

    // const fetchUserItems = async () => {
    //     const items = user.items
        
    // }

    fetchUser();
  }, [userID]);

  return (
    <>
    <h1> {user.firstName}{user.lastName} </h1>
    </>
  )
}
