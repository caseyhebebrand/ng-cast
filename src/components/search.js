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

    this.enterPress = (event, query, result) => {
      if (event.keyCode === 13) {
        youTube.search(query, result);
      }
    };
  },

  templateUrl: 'src/templates/search.html'
});
