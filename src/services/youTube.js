angular.module('video-player')
.service('youTube', function($http, $window) {
  // TODO
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search/', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    }).then(function(resultObj) {
      console.log('success', resultObj.data.items);
      callback(resultObj.data.items);
      
    }).catch(function(resultObj) {
      console.log('error', data);
    });
  }; 
});
