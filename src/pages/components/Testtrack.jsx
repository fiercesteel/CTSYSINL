import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../allpages'
import axios from 'axios'

const Testtrack = () => {

    const { id } = useParams()
    const [track, setTrack] = useState("")
    const [album, setAlbum] = useState("")
    const [artist, setArtist] = useState("")

    useEffect(() => {
        const getTrack = async () => {
            const { data } = await axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setTrack(data)
            //console.log(data)
            setAlbum(data.album)
            //console.log(data.album)
            setArtist(data.artists[0])
            //console.log(data.artists[0])
        }
        getTrack()
    }, [])
    

  return (
    <div>
        <Header></Header>
        <h1>track id: {id}</h1>
        <h1>track name: {track.name}</h1>
        <h1>track cover: {album.images ? <img style={{width: "100px"}} src={album.images[0].url} alt="" /> : <div>No Image</div>}</h1>
        <h1>album name: {album.name}</h1>
        <h1>release date: {album.release_date}</h1>
        <h1>artist: {artist.name}</h1>
    </div>
  )
}

export default Testtrack
