// TrackList.js

import React from 'react';

function TrackList(props) {
  const { tracks, onAdd } = props;

  return (
    <div className="TrackList">
      <h2>Search Results</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            {track.name} - {track.artist} ({track.album})
            <button onClick={() => onAdd(track)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackList;