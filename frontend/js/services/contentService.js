app.factory('contentService', ['$http', function($http) {
  var that = {
    poi: []
  };

  that.getPoi = function() {
    
  };
  
  var init = function() {
    that.getPoi();
  };
  
  init();
  
  return that;
}]);