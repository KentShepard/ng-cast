angular.module('video-player')
.controller('AppCtrl', function(youTube) {
  this.videos = exampleVideoData;
  this.currentVideo = exampleVideoData[0];

  this.selectVideo = (video) => {
    this.currentVideo = video;
  }

  this.searchService = youTube;

  this.searchResults = (response) => {
    this.videos = response;
    this.currentVideo = this.videos[0];
  }

  youTube.search('kittens', this.searchResults);

})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
})