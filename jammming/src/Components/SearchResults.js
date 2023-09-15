import React from 'react'
import TrackList from './TrackList'

function SearchResults() {
    return (
        <div className="SearchResults">
        <h2>Search Results</h2>
      <TrackList />
        <button>Save to Spotify</button>
      </div>
    );
}

export default SearchResults;