var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view1.html',
      controller: 'mainController'
    })
    .when('/view2', {
      templateUrl: 'view2.html',
      controller: 'altController'
    })
    .otherwise({
      templateUrl: 'view1.html',
      controller: 'mainController'
  });
});
