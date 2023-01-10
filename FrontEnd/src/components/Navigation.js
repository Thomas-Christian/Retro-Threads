import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUser } from '../contexts/CurrentUser';

export default function Navigation() {

    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUser)
    
    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <button onClick={() => navigate("/user/sign-up")}>
                    Sign Up
                </button>
            </li>
            <li style={{ float: 'right' }}>
                <button onClick={() => navigate("/user/login")}>
                    Login
                </button>
            </li>
        </>
    )

    if (currentUser) {
        const userID = currentUser.id
        loginActions = (
            <> 
            <li style={{ float: 'right' }}>
                Logged in as <Link to={`/user/${userID}`}>{currentUser.firstName} {currentUser.lastName}</Link>
                <button onClick={() => setCurrentUser(null)}>
                    Log Out
                </button>
            </li>
            
            </>
        )
    }

    return (
        <nav>
            <ul style={{ listStyle: 'none'}}>
                <Link to={'/'}> Home </Link>
                {loginActions}
            </ul>
        </nav>
    )
}
