angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<',
    selectVideoFunction: '<'
  }, 
  
  controller: function() {
  },
  
  templateUrl: 'src/templates/videoList.html'
});
