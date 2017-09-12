angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function($window, youTube) {
    this.videos = $window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.query = '';
    this.selectVideo = (videoSelected) => {
      this.currentVideo = videoSelected;
    };

    this.searchResults = (videos) => {
      console.log('searching');
      this.videos = videos;
      this.currentVideo = videos[0];      
    };
  
    youTube.search('minions', this.searchResults);    
  }
});
