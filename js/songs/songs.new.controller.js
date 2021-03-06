"use strict";

(function(){
  angular
  .module('songs')
  .controller('SongsNewController', [
    'SongFactory',
    '$state',
    SongsNewControllerFunction
  ]);

  function SongsNewControllerFunction(SongFactory, $state){
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save();
      $state.go('songsIndex');
    };
  }
})();
