var app = angular.module('h4t', ['ngRoute', 'ui.map']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .when('/itinerary', {
        templateUrl: 'views/itinerary.html',
        controller: 'itineraryController'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'userController'
      });

  $locationProvider.html5Mode(false);
});

app.constant('BE_URL', {
  "BE": ""
});

app.controller('appController', ['$scope', function($scope) {
  
}]);

function onGoogleReady() {
  angular.bootstrap($('body'), ['h4t']);
}