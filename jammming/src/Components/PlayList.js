import React from 'react'

function Playlist() {
    return (
        <div className="Playlist">
        <h2>My Playlist</h2>
        <Tracklist />
        <button>Save to Spotify</button>
      </div>
    );
}

export default Playlist;
