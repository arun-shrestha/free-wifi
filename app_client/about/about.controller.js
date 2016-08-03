(function () {

  angular
    .module('freeWifiApp')
    .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: 'About Free-Wifi'
    };
    vm.main = {
      content: 'Free-Wifi is created to help people find places to sit down and get a bit of work done. You can contribute to this site by simply giving your review and rating on the businesses that are listed here. If you are a service provider with free wifi to share, you can improve your exprosure by adding details of your business in our page. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullam sit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollis purus quis eros adipiscing tristique. Proin posuere semper tellus, id placerat augue dapibus ornare. Aenean leo metus, tempus in nisl eget, accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper.'
    };
  }

})();