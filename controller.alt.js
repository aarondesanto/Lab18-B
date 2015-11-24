var app = angular.module('myModule');

app.controller('altController', function($scope, mainSrv, herokuSrv) {

  $scope.info = mainSrv.getInfo();
  $scope.herokuInfo = herokuSrv.getInfo();

});
