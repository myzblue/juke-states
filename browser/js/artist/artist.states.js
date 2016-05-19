juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: 'js/artist/artist.templates.html', //start from browser path
    controller: "ArtistsCtrl"
  });
});