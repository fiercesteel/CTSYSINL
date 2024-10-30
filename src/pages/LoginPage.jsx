import React, { useEffect, useState } from 'react'
import './styles/LoginPage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const [token, setToken] = useState("")

  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      setToken(localStorage.getItem('token'))
    }
  })
  
  const CLIENT_ID = "46900a6aa6d64aea84beecbb70bec19b"
  const REDIRECT_URI = "http://localhost:5000/redirect-dashboard"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const SCOPE = "user-follow-read%20user-top-read%20user-library-read%20user-top-read%20playlist-read-private%20playlist-modify-public%20playlist-modify-private%20user-read-private%20user-read-recently-played"
  const RESPONSE_TYPE = "token"

  return (
    <>
      <div className='login-container'>
          <div className='upper'>
            <h2>Index for Spotify</h2>
            <h4>Please login with your spotify account, to view artist rankings and your playlists!</h4>
          </div>
          <div className='login-button'>
            {!token ? <a className="login-loginButton" 
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&show_dialog=true&response_type=${RESPONSE_TYPE}`}>
              Login with Spotify
            </a> : <Link className='login-loginButton' to={"/dashboard"}>Login with Spotify</Link>}
            <h5>By logging in, you agree to our <span><a  className='hyperlink' href='/privacy-notice'>privacy policy</a></span></h5>
          </div>
      </div>
      <div className='login-content'>
        <div className='login-feature'>
          <span className="image">
            <img src="list.png" alt="" />
          </span>
          <div className="text header-text">
            <span className="name">Own Charts</span>
            <span className="desc">View your top artists or tracks that
            you have been listening to.</span>
          </div>
        </div>
        <div className='login-feature'>
          <span className="image">
            <img src="playlist.png" alt="" />
          </span>
          <div className="text header-text">
            <span className="name">Your Playlists</span>
            <span className="desc">Create, view, delete and update
            your playlists.</span>
          </div>
        </div>
        <div className='login-feature'>
          <span className="image">
            <img src="artist.png" alt="" />
          </span>
          <div className="text header-text">
            <span className="name">Artist Records</span>
            <span className="desc">View an artists records such as albums, 
              top tracks and related recommended artists.</span>
          </div>
        </div>
        <div className='login-feature'>
          <span className="image">
            <img src="album.png" alt="" />
          </span>
          <div className="text header-text">
            <span className="name">Album Records</span>
            <span className="desc">View album records such as its artist, 
              the album tracks and its other tracks</span>
          </div>
        </div>
        <div className='login-feature'>
          <span className="image">
            <img src="track.png" alt="" />
          </span>
          <div className="text header-text">
            <span className="name">Track Records</span>
            <span className="desc">View track information such as its artist, 
              its album tracks and other tracks in the album.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
