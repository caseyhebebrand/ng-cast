angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
    service: '<'
  },

  controller: function(youTube) {
    this.query = '';
    this.search = (query, results) => {
      this.service.search(query, results);
    };
  },

  templateUrl: 'src/templates/search.html'
});
