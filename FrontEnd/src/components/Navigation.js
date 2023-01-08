import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from '../contexts/CurrentUser';

export default function Navigation() {

    const navigate = useNavigate();
    const { currentUser } = useContext(CurrentUser)

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
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
        )
    }

    return (
        <nav>
            <ul>
                
                {/* <li>
                    <a href="#" onClick={() => history.push("/places")}>
                        Places
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places/new")}>
                        Add Place
                    </a>
                </li> */}
                {loginActions}
            </ul>
        </nav>
    )
}
