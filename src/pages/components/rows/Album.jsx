import React from 'react'

const Album = (props) => {
  const { album, index, checkedItems, handleCheckboxChange } = props;
  console.log(album)
  return (
    <tr key={album.album.id}>
      <td>{index + 1}</td>
      <td>
        <img src={album.album.images[0].url} alt="Album cover" className="track-image"/>
        {album.album.name}
      </td>
      <td>{album.album.name}</td>
      <td>{album.album.artists[0].name}</td>
      <td>{album.album.total_tracks}</td>
      <td>
        <input
          type="checkbox"
          checked={!!checkedItems[album.id]}
          onChange={() => handleCheckboxChange(album.id)}
        />
      </td>
    </tr>
  )
}

export default Album
