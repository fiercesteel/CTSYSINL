import React from "react";

const Artist = (props) => {
  const { artist, index, checkedItems, handleCheckboxChange } = props;
  return (
    <tr key={artist.id}>
      <td>{index + 1}</td>
      <td>
        <img src={artist.images[0].url} alt="Album cover" className="track-image"/>
        {artist.name}
      </td>
      <td>{artist.followers.total}</td>
      <td>{artist.genres}</td>
      <td>
        <input
          type="checkbox"
          checked={!!checkedItems[artist.id]}
          onChange={() => handleCheckboxChange(artist.id)}
        />
      </td>
    </tr>
  );
};

export default Artist;
