import React from 'react'
import TrackList from './TrackList'; 


function Playlist() {
    return (
        <div className="Playlist">
        <h2>My Playlist</h2>
        <TrackList />
        <button>Save to Spotify</button>
      </div>
    );
}

export default Playlist;
