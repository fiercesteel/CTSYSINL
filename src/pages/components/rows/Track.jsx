import React from "react";

const Track = (props) => {

    const { track, index, checkedItems, handleCheckboxChange } = props
    return (
        <tr key={track.track.id}>
            <td>{index + 1}</td>
            <td>
            <img src={track.track.album.images[0].url} alt="Album cover" className="track-image" />
                {track.track.name}
            </td>
            <td>{track.track.album.name}</td>
            <td className="track-duration-cell">
            <span>{track.track.duration_ms}</span>
            <input type="checkbox" className="checkbox-input"
                checked={!!checkedItems[track.track.id]}
                onChange={() => handleCheckboxChange(track.track.id)} />
            </td>
        </tr>
    )
};

export default Track;
