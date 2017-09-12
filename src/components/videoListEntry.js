angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    onClick: '<',
    selectVideoFunction: '<'
  },

  
  templateUrl: 'src/templates/videoListEntry.html'
});
