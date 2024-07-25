// src/components/CreateURL.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateURL() {
  const [longURL, setLongURL] = useState('');
  const [shortURL, setShortURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/url', { longURL });
      setShortURL(res.data.shortURL);
    } catch (err) {
      alert('Error creating short URL.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Long URL:</label>
        <input type="url" value={longURL} onChange={(e) => setLongURL(e.target.value)} required />
      </div>
      <button type="submit">Create Short URL</button>
      {shortURL && (
        <div>
          <p>Short URL: {shortURL}</p>
        </div>
      )}
    </form>
  );
}

export default CreateURL;
