angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
  
  },

  controller: function(youTube) {
    this.query = '';
    this.search = (query, results) => {
      youTube.search(query, results);
    };
  },

  templateUrl: 'src/templates/search.html'
});
