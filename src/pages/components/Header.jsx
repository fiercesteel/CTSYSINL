import React, { useEffect, useState } from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {

  const [token, setToken] = useState("")
  const [userImage, setUserImage] = useState("")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      setToken(localStorage.getItem('token'))
    }
  }, [])

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`https://api.spotify.com/v1/me`, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        setUserImage(data.images[0].url)
        setUserName(data.display_name)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  // Authentication Variables
  const CLIENT_ID = "46900a6aa6d64aea84beecbb70bec19b"
  const REDIRECT_URI = "http://localhost:5000/redirect-dashboard"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const SCOPE = "user-follow-read%20user-top-read%20user-library-read%20user-top-read%20playlist-read-private%20playlist-modify-public%20playlist-modify-private%20user-read-private%20user-read-recently-played"
  const RESPONSE_TYPE = "token"

  // State for Hamburger Menu
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className='nav'>
        <Link to="/" className='nav-brand'>
          <img src="../logo.png" alt="" />
          <h3>Index for Spotify</h3>
        </Link>
        <div className={menuOpen ? "" : "nav-menu"} onClick={() => {setMenuOpen(!menuOpen)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            {!token 
              ? <a onClick={() => {changeType("playlist")}} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&show_dialog=true&response_type=${RESPONSE_TYPE}`}>
              Your Playlist</a>
              : <a onClick={() => {changeType("playlist")}} href="/dashboard">
              Your Playlist</a>}
          </li>
          <li>
            {!token 
              ? <a onClick={() => {changeType("tracks")}} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&show_dialog=true&response_type=${RESPONSE_TYPE}`}>
              Top Tracks</a>
              : <a onClick={() => {changeType("tracks")}} href="/dashboard">
              Top Tracks</a>}
          </li>
          <li>
            {!token 
              ? <a onClick={() => {changeType("artist")}} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&show_dialog=true&response_type=${RESPONSE_TYPE}`}>
              Top Artists</a>
              : <a onClick={() => {changeType("artist")}} href="/dashboard">
              Top Artists</a>}
          </li>
          <li>
            {!token 
              ? <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&show_dialog=true&response_type=${RESPONSE_TYPE}`}>
              Top Albums</a>
              : <a href="/dashboard">
              Top Albums</a>}
          </li>
          <li style={{marginLeft: "auto"}}>
            {!token 
            ? <a className='nav-loginButton' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&show_dialog=true&response_type=${RESPONSE_TYPE}`}>
            Login</a>
            : <>
              <div className='account-container' onClick={() => {console.log("miau")}}>
                {userImage ? <img className="account-photo" src={userImage} alt="" /> : <img className="account-photo" src="./load.png" alt="" />}
                {userName ? <h4>{userName}</h4> : <h4>Name</h4>}
                <img className="account-arrow" src="../down-arrow.png" alt="" />
              </div>
              </>}
              </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
