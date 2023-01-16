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

    const navigate = useNavigate();

      
async function handleSubmit(e) {
    e.preventDefault()
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
        navigate('/')

    } else {
        setErrorMessage(data.message)
    }
}

    return (

        <div className="flex flex-col h-screen ml-[3.25rem] items-center justify-center px-6 py-8"> 

        <div className="w-full bg-slate-300 rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">

            <h1 className="text-xl text-center underline font-bold p-2 leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign in
            </h1>

            {errorMessage !== null
                ? (
                    <div className="alert" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }

            <form className="m-1 space-y-4 md:space-y-6 p-2" onSubmit={handleSubmit}>

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