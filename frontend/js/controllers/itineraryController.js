app.controller('itineraryController', ['$scope', '$timeout', function($scope, $timeout) {
  //Style
  var MAP_LIGHT_CORRECTION = 0;
  var MAP_BASE_COLOR  = "#111111";
  var MAP_STYLE_ARRAY = [{"featureType":"water","elementType":"geometry","stylers":[{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 10}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 13}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 10}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 22},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 11}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 9}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 14}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 9}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 33}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 12}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 13}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":MAP_BASE_COLOR},{"lightness": MAP_LIGHT_CORRECTION + 10},{"weight":1.2}]}];

  //Params
  var MAP_DEFAULT_CENTER = new google.maps.LatLng(41.99, 12.07);

  $scope.radarMapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: MAP_STYLE_ARRAY,

    streetViewControl: false,
    mapTypeControl: false,
    rotateControl: false,

    center: MAP_DEFAULT_CENTER,
    zoom: 13
  };

  $timeout(function() {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(41.99, 12.07),
      map: $scope.radarMap,
      title: 'Hello World!'
    });

    var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(41.97, 12.06),
      map: $scope.radarMap,
      title: 'Hello World!'
    });

    var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(41.98, 12.05),
      map: $scope.radarMap,
      title: 'Hello World!'
    });

    var marker4 = new google.maps.Marker({
      position: new google.maps.LatLng(41.99, 12.09),
      map: $scope.radarMap,
      title: 'Hello World!'
    });

    var marker5 = new google.maps.Marker({
      position: new google.maps.LatLng(41.95, 12.06),
      map: $scope.radarMap,
      title: 'Hello World!'
    });
  }, 0);
}]);