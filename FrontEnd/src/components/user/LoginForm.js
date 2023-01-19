import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from "../../contexts/CurrentUser"

export default function LoginForm() {

    const { setCurrentUser } = useContext(CurrentUser)
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

      
async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)

    const response = await fetch(`http://localhost:5000/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    const data = await response.json()

    if (response.status === 200) {
        await setCurrentUser(data.user)
        setLoading(false)
        navigate('/')

    } else {
        setErrorMessage(data.message)
    }
}
    if (loading) {
        return (
            <div className="flex flex-col h-screen ml-[3.25rem] items-center justify-center px-6 py-8"> 
                
                
                <h1 className="text-4xl font-lily-script tracking-wide text-center text-primary font-bold p-3 "> Loading </h1>
                <FontAwesomeIcon className="animate-spin-slow text-quaternary" icon={faCircleNotch} fixedWidth size="2xl"/> 
                

            </div>

        )
    }

    return (

        <div className="flex flex-col h-screen ml-[3.25rem] items-center justify-center px-6 py-8"> 

        <div className="w-full bg-primary rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">

            <h1 className="text-xl text-center font-bold p-2 text-secondary md:text-2xl">
                  Sign in
            </h1>

            { errorMessage !== null
                ? (
                    <div className="alert" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }

            <form className="m-2 p-2" onSubmit={handleSubmit}>

                        <label htmlFor="email" className="form-label-style"> Email: </label>

                        <input
                            required
                            type="email" id="email" name="email"
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            className="form-input-style" placeholder="name@company.com">
                        </input>

                        <label htmlFor="password" className="form-label-style"> Password: </label>
                        <input
                            required
                            type="password" id="password" name="password"
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-input-style" placeholder="••••••••"
                        />
                  
                    <div className="flex"> 
                    <button type="submit" className="btn-primary"> Let's Go! </button>
                    </div>
                    
            </form>

        </div>

        </div>
    )
}