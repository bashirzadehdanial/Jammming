import './App.css';
import PlayList from './Components/PlayList';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import TrackList from './Components/TrackList';


function App() {
  return (
    <div className="App">
        <PlayList />
        <SearchBar />
        <SearchResults />
        <TrackList />
    </div>
  );
}

export default App;