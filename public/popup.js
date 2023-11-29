async function downloadVideo () {
  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, { action: 'downloadVideo' }, function (response) {
  //     if (response && response.videoUrl) {
  //       // Создаем ссылку для загрузки видео
  //       const link = document.createElement('a');
  //       link.href = response.videoUrl;
  //       link.setAttribute('download', 'video.mp4'); // Устанавливаем имя для скачиваемого файла
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     } else {
  //       console.error('Video URL not found');
  //     }
  //   });
  // });

  try {
    const response = await axios.post('https://co.wuk.sh/api/json', {
      url: encodeURI("https://www.youtube.com/watch?v=kIKB0-A1fVk"),
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
      console.log("edil")
      setDownloadUrl(response.data.url);
    } else {
      throw new Error('No URL found');
    }
  } catch (error) {
    console.error(error);
  }
}

document.getElementById('downloadButton').addEventListener('click', downloadVideo);
