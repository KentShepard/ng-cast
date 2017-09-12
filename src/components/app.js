angular.module('video-player')
.controller('AppCtrl', function() {
  this.videos = exampleVideoData;
  this.currentVideo = exampleVideoData[0];

  this.selectVideo = (video) => {
    this.currentVideo = video;
  }
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
})

//