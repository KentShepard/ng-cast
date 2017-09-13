angular.module('video-player')
.service('youTube', function($http, $window){
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        maxResults: 5,
        type: 'video',
        part: 'snippet',
        videoEmbeddable: 'true',
        key: $window.YOUTUBE_API_KEY
      }
    })
    .then(function({data}) {
      if (callback) {
        callback(data.items);
      }
    })
    .catch(function({data}) {
      data.error.errors.forEach(function(err) {
        console.error(err.message);
      });
    });
  };
});
