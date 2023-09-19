import React, { useState } from 'react';
import TrackList from './Components/TrackList';
import PlayList from './Components/PlayList';

import './App.css'; // Import the CSS file


function App() {
  const [playList, setPlayList] = useState([]);
  const [searchResults, setSearchResults] = useState([
    {
      id: '1',
      name: 'Song 1',
      artist: 'Artist 1',
      album: 'Album 1',
    },
    {
      id: '2',
      name: 'Song 2',
      artist: 'Artist 2',
      album: 'Album 2',
    },
  ]);

  // Function to add a track to the playlist
  const addToPlayList = (track) => {
    if (!PlayList.some((t) => t.id === track.id)) {
      setPlayList([...PlayList, track]);
    }
  };

  // Function to remove a track from the playlist
  const removeFromPlayList = (track) => {
    const updatedPlayList = playList.filter((t) => t.id !== track.id);
    setPlayList(updatedPlayList);
  };


  return (
    <div className="App">
      <h1>My Jammming App</h1>
      <TrackList tracks={searchResults} onAdd={addToPlayList} />
      <PlayList playList={playList} onRemove={removeFromPlayList} />
    </div>
  );
}

export default App;
