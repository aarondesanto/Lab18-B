var app = angular.module('myModule');

app.factory('herokuSrv', function($http) {

  var herokuInfo = { data: '' };

  $http({
    method: 'GET',
    url: 'http://twlaas.herokuapp.com'
  }).then(function successCallback(response) {
    console.log('success');
    herokuInfo.data = response.data;
  }, function errorCallback(response) {
    console.log('failure');
    herokuInfo.data = "Uh oh, there was a problem retrieving that data. :(";
  });

  return {
    getInfo: function(){
      return herokuInfo;
    }
  };

});
