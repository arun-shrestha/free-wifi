(function() {

  angular
    .module('freeWifiApp')
    .service('freeWifiData', freeWifiData);

  freeWifiData.$inject = ['$http'];
  function freeWifiData ($http) {
    var locationByCoords = function (lat, lng) {
      return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
    };
    return {
      locationByCoords : locationByCoords
    };
  }

})();