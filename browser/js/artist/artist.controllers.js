'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('ArtistsCtrl', function ($scope, $log, $rootScope, artists) {

  // $scope.$on('viewSwap', function (event, data) {
  //   if (data.name !== 'allArtists') return $scope.showMe = false;
  //   $scope.showMe = true;
  // });

  // $scope.viewOneArtist = function (artist) {
  //   $rootScope.$broadcast('viewSwap', { name: 'oneArtist', id: artist.id });
  // };
 // Array.isArray(artists);
 // artists.length;


  // ArtistFactory.fetchAll()
  // .then(function (artists) {
  $scope.artists = artists;
  // })
  // .catch($log.error);

});

/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('ArtistCtrl', function ($scope, $log, PlayerFactory, $rootScope, $stateParams, artist) {

  // var id = $stateParams.id;
  
  // // $scope.$on('viewSwap', function (event, data) {

  // //   if (data.name !== 'oneArtist') return $scope.showMe = false;
  // //   $scope.showMe = true;

  //   ArtistFactory.fetchById(id)
  //   .then(function (artist) {
      $scope.artist = artist;
  //   })
  //   .catch($log.error);

  // });

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.artist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.viewOneAlbum = function (album) {
    $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album.id });
  };

});
