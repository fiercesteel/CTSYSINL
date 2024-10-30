import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Header } from './allpages'

const Dashboard = () => {

  const history = useNavigate();

  useEffect(() => {
    getTracks()
  },  [])

  // API link for reusable code
  const apiLink = "https://api.spotify.com/v1"

  // =============== API CALLS =============== //

  const [data, setData] = useState({})
  
  const getPlaylists = async () => {
    try {
      const { data } = await axios.get(`${apiLink}/me/playlists`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {
            offset: 0,
            limit: 50
        }
      })
      setData(data.items)
    } catch (error) {
      console.log(error)
    }

    // {data && data.map && data.map((element, index) => {
    //   return (
    //     <li key={index}>{element.name}</li>
    //   )
    // })}
  }
  
  const getTracks = async () => {
    try {
      const { data } = await axios.get(`${apiLink}/me/tracks`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {
            offset: 0,
            limit: 50
        }
      })
      setData(data.items)
    } catch (error) {
      console.log(error)
    }

    // {data && data.map && data.map((element, index) => {
    //   return (
    //     <li key={index}>{element.track.name}</li>
    //   )
    // })}
  }


  const getArtists = async () => {
    try {
      const { data } = await axios.get(`${apiLink}/me/following`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {
            type: "artist",
            limit: 50
        }
      })
      setData(data.artists.items)
    } catch (error) {
      console.log(error)
    }

    // {data && data.map && data.map((element, index) => {
    //   return (
    //     <li key={index}>{element.name}</li>
    //   )
    // })}
  }

  const getAlbums = async () => {
    try {
      const { data } = await axios.get(`${apiLink}/me/albums`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {
            limit: 50,
            offset: 0,
            market: "ES"
        }
      })
      setData(data.items)
    } catch (error) {
      console.log(error)
    }

    // {data && data.map && data.map((element, index) => {
    //   return (
    //     <li key={index}>{element.album.name}</li>
    //   )
    // })}
  }

  const trackSelect = (element) => {
    history(`/track/${element}`)
    console.log(element)
  }

  return (
    <div>
      <Header></Header>
      {localStorage.getItem('token') == null ? <h1>No account</h1>
      : <>
          <Link to={"/"}>dashboard </Link>
          <hr />
          {localStorage.getItem('token') == null ? <Link to={"/"}>login</Link>
          : <Link to={'/'} onClick={() => {
            localStorage.removeItem("token")
            }}>logout</Link>}
        </>}
        <hr />
        <ul>
          {data && data.map && data.map((element, index) => {
            return (
              <li key={index}> <button onClick={() => {trackSelect(element.track.id)}}>{element.track.name} - {element.track.album.artists[0].name}</button></li>
            )
          })}
        </ul>
    </div>
  )
}

export default Dashboard
