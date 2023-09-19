// PlayList.js

import React from 'react';

function PlayList(props) {
  const { playList, onRemove } = props;

  return (
    <div className="PlayList">
      <h2>My Custom PlayList</h2>
      <ul>
        {playList.map((track) => (
          <li key={track.id}>
            {track.name} - {track.artist} ({track.album})
            <button onClick={() => onRemove(track)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayList;