// background.js
// import axios from 'axios';
// // Функция для загрузки видео
// const fetchVideoUrl = async (videoUrl, audioOnly = false) => {
  // try {
  //   const response = await axios.post('https://co.wuk.sh/api/json', {
  //     url: encodeURI(videoUrl),
  //     vQuality: 'max',
  //     filenamePattern: 'basic',
  //     isAudioOnly: audioOnly,
  //     disableMetadata: true,
  //   }, {
  //     headers: {
  //       'Accept': 'application/json', // Добавляем заголовок Accept
  //     }
  //   });
  //   if (response.data && response.data.url) {
  //     return response.data.url;
  //   } else {
  //     throw new Error('No URL found');
  //   }
  // } catch (error) {
  //   console.error(error);
  //   return null;
  // }
// };

// // Принимаем сообщения от контентного скрипта
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'downloadVideo') {
//     const { url } = request;
//     fetchVideoUrl(url).then(downloadUrl => {
//       sendResponse({ downloadUrl });
//     });
//     return true;
//   }
// });




//Listen for when a Tab changes state
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(changeInfo && changeInfo.status == "complete"){
      console.log("Tab updated: " + tab.url);

      chrome.tabs.sendMessage(tabId, {data: tab}, function(response) {
          console.log(response);
      });

  }
});

