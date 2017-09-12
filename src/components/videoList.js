angular.module('video-player')
.component('videoList', {

  controller: function() {
    this.videos = exampleVideoData;

    this.addVideoListEntry = () => {

    }

    this.onClick = () => {

    }
  },

  templateUrl: 'src/templates/videoList.html'
});