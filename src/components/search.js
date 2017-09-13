angular.module('video-player')
.controller('SearchCtrl', function() {
  this.handleClick = () => {
    this.service.search(this.input, (data) => {
      this.result(data);
    });
  };
})
.component('search', {

  bindings: {
    service: '<',
    result: '<'
  },
  controller: 'SearchCtrl',

  templateUrl: 'src/templates/search.html'
});
