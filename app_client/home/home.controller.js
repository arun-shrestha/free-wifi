(function () {

  angular
    .module('freeWifiApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'freeWifiData', 'geolocation'];
  function homeCtrl ($scope, freeWifiData, geolocation) {
    var vm = this;
    vm.pageHeader = {
      title: 'Free-Wifi',
      strapline: 'Find places to work with wifi near you!'
    };
    vm.sidebar = {
      content: "Looking for wifi and a seat? Free-Wifi helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Free-Wifi help you find the place you're looking for."
    };
    vm.message = "Checking your location";

    vm.getData = function (position) {
      var lat = position.coords.latitude,
          lng = position.coords.longitude;
      vm.message = "Searching for nearby places";
      freeWifiData.locationByCoords(lat, lng)
        .success(function(data) {
          vm.message = data.length > 0 ? "" : "No locations found nearby";
          vm.data = { locations: data };
          console.log(vm.data);
        })
        .error(function (e) {
          vm.message = "Sorry, something's gone wrong, please try again later";
        });
    };

    vm.showError = function (error) {
      $scope.$apply(function() {
        vm.message = error.message;
      });
    };

    vm.noGeo = function () {
      $scope.$apply(function() {
        vm.message = "Geolocation is not supported by this browser.";
      });
    };

    geolocation.getPosition(vm.getData,vm.showError,vm.noGeo);

  }

})();