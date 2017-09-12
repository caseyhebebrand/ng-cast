angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function($window, youTube) {
    this.service = youTube;
    this.videos = $window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.query = '';
    this.selectVideo = (videoSelected) => {
      this.currentVideo = videoSelected;
    };

    this.searchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];      
    };
  
    this.service.search('minions', this.searchResults);    
  }
});
