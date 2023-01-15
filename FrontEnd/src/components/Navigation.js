import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUser } from '../contexts/CurrentUser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {

    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUser)
    
    let loginActions = (

        <div className='text-center'> 

            <li className='py-1 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold rounded py-1 px-2 inline-flex items-center m-auto" 
                
                onClick={() => navigate("/user/sign-up")}>

                    <FontAwesomeIcon icon={faUserPlus} fixedWidth />

                    <span class="tooltip-text bg-blue-200 rounded hidden whitespace-nowrap
                     group-hover:inline-flex absolute left-14 py-0.5 px-2 z-1"> 
                     
                     Sign-Up </span>
                
                </button>

            </li>

            <li className='py-1 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center m-auto"
                
                onClick={() => navigate("/user/login")}>
                   
                   <FontAwesomeIcon icon={faRightToBracket} fixedWidth />

                   <span class="tooltip-text bg-blue-200 rounded hidden group-hover:block absolute left-14 text-center py-0.5 px-2 z-1"> Login </span>

                </button>
            </li>
            
        </div>
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

        <div className="fixed top-0 left-0 h-screen px-2 py-1
                        flex flex-col 
                        bg-gray-500 text-white shadow-md">

            <ul>

                {/* <Link to={'/'}> Home </Link> */}

                {loginActions}

            </ul>


        </div>
    )
}
