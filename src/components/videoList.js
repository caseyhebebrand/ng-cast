angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<',
    selectVideoFunction: '<'
  }, 
  
  controller: function() {
    this.onClick = (video) => {
      console.log('clicked', video);
      this.selectVideoFunction(video);
    };
  },
  

  templateUrl: 'src/templates/videoList.html'
});
// selectVideoFunction="$ctrl.selectVideo"