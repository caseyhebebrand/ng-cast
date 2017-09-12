angular.module('video-player')

.component('search', {
  bindings: {
    query: '<',
    result: '<'
  },

  controller: function() {
    // this.result = () => {
    //   console.log('clicked', this.query);
    // };
  },

  templateUrl: 'src/templates/search.html'
});
