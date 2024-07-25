// src/components/URLList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function URLList() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get('/api/url');
        setUrls(res.data);
      } catch (err) {
        alert('Error fetching URLs.');
      }
    };
    fetchUrls();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Long URL</th>
          <th>Short URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url) => (
          <tr key={url._id}>
            <td>{url.longURL}</td>
            <td>{url.shortURL}</td>
            <td>{url.clicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default URLList;
