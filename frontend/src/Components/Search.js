import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

export default function GameSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8070/Game/search?GameTitle=${searchTerm}`);

      if (response.status === 200) {
        setSearchResults(response.data);
        setError(null);
      } else {
        setError('No results found');
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error during search:', error);
      setError('Error with search');
      setSearchResults([]);
    }
  }

  const downloadSetup = (gameId) => {
    console.log(`Download setup for the game with ID ${gameId}.`);
  };

  return (
    <div className='Search container'>
      <h2>Search Games by Title</h2>
      <input
        type="text"
        placeholder="Search by Game Title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div className="error">{error}</div>}
      <ul>
        {searchResults.map((game) => (
          <li className='searchResultList' key={game._id}>
            <strong>ID:</strong> {game._id}<br />
            <strong>Title:</strong> {game.GameTitle}<br />
            <strong>Genre:</strong> {game.GameGenre}<br />
            <strong>RAM:</strong> {game.RAM}<br />
            <strong>GPU:</strong> {game.GPU}<br />
            <strong>ROM:</strong> {game.ROM}<br />
            <button onClick={() => downloadSetup(game._id)}>Download Setup {game.ROM}</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
