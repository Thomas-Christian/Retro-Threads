import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from '../contexts/CurrentUser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserPlus, faHouseChimney, faSquarePlus, faShop, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

export default function Navigation() {

    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUser)
    
    let loginActions = (

        <div className='text-center'> 

            <li className='py-1 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center m-auto"
                
                onClick={() => navigate("/user/login")}>
                   
                   <FontAwesomeIcon icon={faRightToBracket} fixedWidth />

                   <span className="tooltip-text bg-blue-200 rounded hidden whitespace-nowrap
                     group-hover:inline-flex absolute text-sm uppercase left-14 py-0.5 px-2 z-1">
                        
                    Login </span>

                </button>
            </li>

            <li className='py-1 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold rounded py-1 px-2 inline-flex items-center m-auto" 
                
                onClick={() => navigate("/user/sign-up")}>

                    <FontAwesomeIcon icon={faUserPlus} fixedWidth />

                    <span className="tooltip-text bg-blue-200 rounded hidden whitespace-nowrap
                     group-hover:inline-flex absolute text-sm uppercase left-14 py-0.5 px-2 z-1"> 
                     
                     Sign-Up </span>
                
                </button>

            </li>

        </div>
    )

    let appRoutes = (

        <div id='appRoutes' className='text-center absolute bottom-1'>

            <li id='home' className='py-3 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center m-auto"
                
                onClick={() => navigate("/")}>
                
                <FontAwesomeIcon icon={faHouseChimney} fixedWidth />

                <span className="tooltip-text bg-blue-200 rounded hidden whitespace-nowrap
                    group-hover:inline-flex absolute text-sm uppercase left-12 py-0.5 px-2 z-1">
                        
                    Home </span>

                </button>
            </li>


            <li id='viewAll' className='py-3 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center m-auto"
                
                onClick={() => {
                     
                    navigate("/item/view/all")
                    
                }}>
                
                <FontAwesomeIcon icon={faShop} fixedWidth />

                <span className="tooltip-text bg-blue-200 rounded hidden whitespace-nowrap
                    group-hover:inline-flex absolute text-sm uppercase left-12 py-0.5 px-2 z-1">
                        
                    Shop </span>

                </button>
            </li>

        </div>
    )

    // CHANGE WHATS SHOWED WHEN LOGGED IN
    if (currentUser) {

        const userID = currentUser.id

        loginActions = (

            <div className='text-center'> 

            <li className='py-1 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center m-auto"
                
                onClick={() => navigate(`/user/${userID}`)}>
                   
                   <FontAwesomeIcon icon={faAddressCard} fixedWidth />

                   <span className="tooltip-text bg-blue-200 rounded hidden whitespace-nowrap
                     group-hover:inline-flex absolute text-sm uppercase left-14 py-0.5 px-2 z-1">
                        
                    View Profile </span>

                </button>
            </li>

            <li className='py-1 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold rounded py-1 px-2 inline-flex items-center m-auto" 
                
                onClick={() => {setCurrentUser(null); navigate('/')}}>

                    <FontAwesomeIcon icon={faCircleMinus} fixedWidth />

                    <span className="tooltip-text bg-blue-200 rounded hidden whitespace-nowrap
                     group-hover:inline-flex absolute text-sm uppercase left-14 py-0.5 px-2 z-1"> 
                     
                     Logout </span>
                
                </button>

            </li>

        </div>
        )

        appRoutes = (
            <div id='appRoutes' className='text-center absolute bottom-1'>

            <li id='home' className='py-3 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center m-auto"
                
                onClick={() => navigate("/")}>
                
                <FontAwesomeIcon icon={faHouseChimney} fixedWidth />

                <span className="tooltip-text bg-blue-200 rounded hidden whitespace-nowrap
                    group-hover:inline-flex absolute text-sm uppercase left-12 py-0.5 px-2 z-1">
                        
                    Home </span>

                </button>
            </li>

            <li id='newItem' className='py-3 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center m-auto"
                
                onClick={() => {
                     
                    navigate("/item/new")
                    
                }}>
                
                <FontAwesomeIcon icon={faSquarePlus} fixedWidth />

                <span className="tooltip-text bg-blue-200 rounded hidden whitespace-nowrap
                    group-hover:inline-flex absolute text-sm uppercase left-12 py-0.5 px-2 z-1">
                        
                    New item </span>

                </button>
            </li>

            <li id='viewAll' className='py-3 group'>

                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center m-auto"
                
                onClick={() => {
                     
                    navigate("/item/view/all")
                    
                }}>
                
                <FontAwesomeIcon icon={faShop} fixedWidth />

                <span className="tooltip-text bg-blue-200 rounded hidden whitespace-nowrap
                    group-hover:inline-flex absolute text-sm uppercase left-12 py-0.5 px-2 z-1">
                        
                    Shop </span>

                </button>
            </li>

        </div>
        )
    }






    return (
        <div id='navigation'> 

        <div id='sideNav' className="fixed top-0 left-0 z-10 h-screen px-2 py-2
                        flex flex-col 
                        bg-gray-500 text-white shadow-md">

            <ul>
                {loginActions}
                {appRoutes}
            </ul>


        </div>

        <div id='headerLogo' className='fixed w-screen z-1 top-0 py-3 text-black'>

            <h1 className='text-5xl font-lily-script text-center ml-[3.25rem]'> RetroThreads </h1>

        </div>

        </div>
    )
}
