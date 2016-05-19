juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: 'js/album/albums.template.html', //start from browser path
    
    resolve: {
      albums: function (AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    },

    controller: "AlbumsCtrl"
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('album', {
    url: '/albums/:id',
    templateUrl: 'js/album/singleAlbum.template.html', //start from browser path
    
    resolve: {
      album: function (AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.id)
      }
    },

    controller: "AlbumCtrl"
  });
});
