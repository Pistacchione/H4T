app.controller('homeController', ['$scope', '$location', 'contentService', function($scope, $location, contentService) {
  $scope.homeSlides = [{
    image: "1",
    title: "Passaggio a Nord-Ovest",
    short: "Un emozionante viaggio attraverso le misteriose tombe etrusche di Tarquinia e Cerveteri"
  }, {
    image: "2",
    title: "",
    short: ""
  }, {
    image: "3",
    title: "",
    short: ""
  }];

  $scope.gotoItinerary = function() {
    $location.path('/itinerary');
  };
}]);