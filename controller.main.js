var app = angular.module('myModule');

app.controller('mainController', function($scope, mainSrv) {

  $scope.store = function(name, instrument) {
    mainSrv.save(name, instrument);
  };

});
