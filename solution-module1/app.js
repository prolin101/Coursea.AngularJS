(function () {
'use strict';

angular.module('AssMod1', [])
.controller('AssMod1Controller', AssMod1Controller);

AssMod1Controller.$inject = ['$scope'];
function AssMod1Controller($scope) {

  $scope.arrayItem = [];

  $scope.convertToArray = function() {
    $scope.arrayItem = $scope.string.split(',');
  }

  $scope.countItem = function(){
    var nbItem = $scope.arrayItem.length;
    return nbItem;
  }

  $scope.showMsg = function(){
    var msg = "";
    if ($scope.countItem() <= 3 && $scope.countItem() > 0 ) {
      msg = "Enjoy ;-)";

    } else if ($scope.countItem() > 3) {
      msg = "Too much !!!";
    }
    console.log(msg);
    return msg;
  }
}

})();
