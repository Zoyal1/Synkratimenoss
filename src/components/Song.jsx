import React from 'react';

const Song = ({ song }) => {
  return (
    <div className="song">
      <img src={song.album.images[0].url} alt={song.name} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <p>{song.artists.map((artist) => artist.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default Song;
