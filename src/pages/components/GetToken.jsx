import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const GetToken = () => {

    const [token, setToken] = useState("")

    useEffect(() => {
        if(localStorage.getItem('token') !== null){
        setToken(localStorage.getItem('token'))
        }
    }, [])

    // For storing token to local storage
    useEffect(() => {
        const setupToken = async () => {
            if(!token) {
            
                // Getting token from url
                const hash = window.location.hash
                let newToken = window.localStorage.getItem("token")
    
                // Splitting and Saving token to local storage
                if (!newToken && hash) {
                    newToken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
                    window.location.hash = ""
                    window.localStorage.setItem("token", newToken)
                }
            }
        }
        setupToken()
    }, [])

  return (
    <div>
        {localStorage.getItem('token') !== null ? <Navigate to={'/dashboard'}></Navigate>: ""}
    </div>
  )
}

export default GetToken
