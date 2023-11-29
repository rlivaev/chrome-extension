import './App.css';

import React, { useState } from 'react';
import axios from 'axios'; 

function App() {

  const [downloadUrl, setDownloadUrl] = useState('');

  const fetchVideoUrl = async (videoUrl, audioOnly = false) => {
    try {
      const response = await axios.post('https://co.wuk.sh/api/json', {
        url: encodeURI(videoUrl),
        vQuality: 'max',
        filenamePattern: 'basic',
        isAudioOnly: audioOnly,
        disableMetadata: true,
      },{
        headers: {
          'Accept': 'application/json', // Добавляем заголовок Accept
        }
      });
      if (response.data && response.data.url) {
        setDownloadUrl(response.data.url);
      } else {
        throw new Error('No URL found');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownloadVideo = async () => {
    await fetchVideoUrl("https://www.youtube.com/watch?v=kIKB0-A1fVk");
  };

  return (
    <div>
      <button onClick={handleDownloadVideo}>Download Video</button>
      {downloadUrl && (
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
          Download Link
        </a>
      )}
    </div>
  );
}

export default App;

