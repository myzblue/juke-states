juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: 'js/artist/artist.template.html', //start from browser path
    controller: "ArtistsCtrl"
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('artist', {
    url: '/artists/:id',
    templateUrl: 'js/artist/singleArtist.template.html', //start from browser path
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