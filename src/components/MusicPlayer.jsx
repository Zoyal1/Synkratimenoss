import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicPlayer = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    // Ambil daftar lagu dari Spotify API
    axios.get('https://spotify23.p.rapidapi.com/search/', {
        headers: {
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
          'X-RapidAPI-Key': '5a3b18290cmsh3b4577ac0d31a49p1bc9b4jsn956a56694fc1',
      },
    })
      .then((response) => {
        setPlaylist(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="music-player-container">
      <div className="music-player">
        <h1>Spotify Music Player</h1>
        <div className="playlist">
          {playlist.map((song, index) => (
            <Song key={index} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
