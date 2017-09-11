angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function($window) {
    this.selectVideo = function() {

    };
    this.searchResults = function() {

    };
    this.videos = $window.exampleVideoData;
    this.currentVideo = this.videos[0];
  }
});
