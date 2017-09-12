angular.module('video-player')
.service('youTube', function($http, $window) {
  // TODO
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      data: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    }).then(function(data) {
      callback(data.items);
      console.log('success', data);
      
    }).catch(function(data) {
      console.log('error', data);
    });
  }; 
});
