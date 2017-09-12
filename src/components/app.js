angular.module('video-player')
.controller('AppCtrl', function() {
  this.videos = exampleVideoData;
  this.currentVideo = exampleVideoData[0];
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
})