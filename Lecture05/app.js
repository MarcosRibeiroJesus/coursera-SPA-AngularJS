(function () {
'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope) {
    $scope.name = "Marcos Ribeiro"
    $scope.sayHello = function () {
      return "Hello Coursera!"
    };
  });

})();
