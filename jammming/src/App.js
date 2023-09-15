import './App.css';
import React from 'react';
import PlayList from './Components/PlayList';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import TrackList from './Components/TrackList';


function App() {
  return (
    <div className = 'appContainer'>
      <h1>Jammming</h1>
        <PlayList />
        <SearchBar />
        <SearchResults />
        <TrackList />
    </div>
  )
}

export default App;
