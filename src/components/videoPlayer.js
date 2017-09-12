angular.module('video-player')

.component('videoPlayer', {

  controller: function() {
    this.video = exampleVideoData[0];
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
