import React from 'react'

const Playlist = (props) => {

    const { playlist, index, checkedItems, handleCheckboxChange } = props;
    return (
        <tr key={playlist.id}>
        <td>{index + 1}</td>
        <td>
            {playlist.images ? <img src={playlist.images[0].url} alt="Album cover" className="track-image"/>
            : <div>No Image</div>}
            {playlist.name}
        </td>
        <td>{playlist.owner.display_name}</td>
        <td>{playlist.tracks.total}</td>
        <td>
        <input type="checkbox"
            checked={!!checkedItems[playlist.id]}
            onChange={() => handleCheckboxChange(playlist.id)}
        />
        </td>
        </tr>
    )
}

export default Playlist
