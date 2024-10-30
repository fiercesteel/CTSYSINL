import React, { useState, useEffect } from "react";
import "./styles/Dashboard1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Header } from "./allpages";
import axios from "axios";
import { Album, Artist, Playlist, Track } from './components/rows/rows'

const Dashboard1 = () => {

  const [limit, setLimit] = useState(50); // State for limit input
  const [search, setSearch] = useState(""); // State for search input
  const [type, setType] = useState("track"); // State for the type dropdown
  const [selectAll, setSelectAll] = useState(false); // State for header checkbox
  const [checkedItems, setCheckedItems] = useState({}); // State to track individual checkboxes

  // API link for reusable code
  const apiLink = "https://api.spotify.com/v1"

  // States for each type
  const [trackData, setTrackData] = useState([])
  const [playlistData, setPlaylistData] = useState([])
  const [artistData, setArtistData] = useState([])
  const [albumData, setAlbumData] = useState([])
  const [change, setChange] = useState(0)

  // useEffect for type changes
  useEffect(() => {
    const displayData = async () => {
      if(type === "track"){
        await getTracks()
      } else if(type === "playlist"){
        await getPlaylists()
      } else if(type === "artist"){
        await getArtists()
      } else if(type === "album"){
        await getAlbums()
      }
    }
    displayData()
  }, [change, limit])
  
  const getTracks = async () => {
    try {
      const { data } = await axios.get(`${apiLink}/me/tracks`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {
            offset: 0,
            limit: limit
        }
      })
      setTrackData(data.items)
      console.log(data.items)
    } catch (error) {
      console.log(error)
    }
  }

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
      setPlaylistData(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  const getArtists = async () => {
    try {
      const { data } = await axios.get(`${apiLink}/me/following`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {
            type: "artist",
            limit: limit
        }
      })
      setArtistData(data.artists)
      console.log(data.artists)
    } catch (error) {
      console.log(error)
    }
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
      setAlbumData(data.items)
      console.log(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  // Handle header checkbox toggle
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newCheckedItems = data.reduce((acc, item) => {
      acc[item.id] = newSelectAll;
      return acc;
    }, {});
    setCheckedItems(newCheckedItems);
  };

  // Handle individual row checkbox toggle
  const handleCheckboxChange = (id) => {
    const newCheckedItems = {
      ...checkedItems,
      [id]: !checkedItems[id],
    };
    setCheckedItems(newCheckedItems);

    // If all items are checked, update the header checkbox
  const allChecked = data.every((item) => newCheckedItems[item.id]);
    setSelectAll(allChecked);
  };

  return (
    <>
      <Header/>
      <div className="dashboard-container">
        {/* Control Panel */}
        <div className="control-panel">
          <div className="limit-control">
            <label>Limit</label>
            <input
              type="number"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              min="0"
            />
          </div>
          <div className="type-control">
            <label>Type</label>
            <select id="dropdown" value={type} onChange={(e) => {
              setType(e.target.value, setChange(change+1))
            }}>
              <option value="track">Track</option>
              <option value="playlist">Playlist</option>
              <option value="artist">Artist</option>
              <option value="album">Album</option>
            </select>
          </div>
          <div className="search-control">
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>

        {/* Table Section */}
        <div className="table-section">
          {type === "track" ? 
            <table className="custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Album</th>
                  <th className="track-duration-header">
                    <FontAwesomeIcon icon={faClock} />{" "}
                    {/* Duration icon only for Track */}
                    <input type="checkbox" className="header-checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {trackData && trackData.map && trackData.map((track, index) => (
                  <Track track={track} 
                    index={index} 
                    checkedItems={checkedItems} 
                    handleCheckboxChange={handleCheckboxChange} />
                ))}
              </tbody>
            </table>
          : type === "playlist" ?
            <table className="custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Playlist</th>
                  <th>Owner</th>
                  <th>Tracks</th>
                  <th>
                    <input
                      type="checkbox"
                      className="header-checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {playlistData && playlistData.map && playlistData.map((playlist, index) => (
                  <Playlist playlist={playlist} 
                  index={index} 
                  checkedItems={checkedItems} 
                  handleCheckboxChange={handleCheckboxChange} />
                ))}
              </tbody>
            </table>
          : type === "artist" ?
            <table className="custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Artist</th>
                  <th>Popularity</th>
                  <th>Genre</th>
                  <th>
                    <input
                      type="checkbox"
                      className="header-checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {artistData.items && artistData.items.map && artistData.items.map((artist, index) => (
                  <Artist artist={artist} 
                  index={index} 
                  checkedItems={checkedItems} 
                  handleCheckboxChange={handleCheckboxChange} />
                ))}
              </tbody>
            </table>
          : type === "album" ?
            <table className="custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Album</th>
                  <th>Artist</th>
                  <th>Tracks</th>
                  <th>
                    <input
                      type="checkbox"
                      className="header-checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {albumData.map((album, index) => (
                  <Album album={album} 
                  index={index} 
                  checkedItems={checkedItems} 
                  handleCheckboxChange={handleCheckboxChange} />
                ))}
              </tbody>
            </table>
          : <h1>hi</h1>}
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
