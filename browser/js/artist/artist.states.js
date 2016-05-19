juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: 'js/artist/artist.template.html', //start from browser path
    
    resolve: {
        artists: function(ArtistFactory) {
          return ArtistFactory.fetchAll()
        }
    },

    controller: "ArtistsCtrl"
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('artist', {
    url: '/artists/:id',
    templateUrl: 'js/artist/singleArtist.template.html', //start from browser path
 
    resolve: {
      artist: function (ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id)
      }
    },

    controller: "ArtistCtrl"
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('artist.albums', {
    url: '/artists/:id/albums',
    templateUrl: 'js/artist/albumsforArtist.template.html', //start from browser path
    controller: "ArtistCtrl"
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('artist.songs', {
    url: '/artists/:id/songs/',
    templateUrl: 'js/artist/songsforArtist.template.html', //start from browser path
    controller: "ArtistCtrl"
  });
});

// $stateProvider.state('somestate', {
//   ...
//   resolve: {
//     artists: function(ArtistFactory) {
//       return ArtistFactory.getAll()
//     }
//   },
//   controller: 'ArtistListController'
//   ...
// })