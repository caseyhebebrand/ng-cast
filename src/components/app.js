angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function($window, youTube) {
    this.videos = $window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.query = 'Ellen Degeneres';
    this.selectVideo = (videoSelected) => {
      this.currentVideo = videoSelected;
    };

    this.searchResults = () => {
      console.log('searching', this.query);
      youTube.search(this.query, (videos) => {
        this.videos = videos;
        this.currentVideo = videos[0];
      });
      
    };
   
  }
});
