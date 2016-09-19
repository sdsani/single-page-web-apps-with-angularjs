(function () {
'use strict';

angular.module('AssignmentOneModule', [])
.controller('AssignmentOneController', function ($scope) {
  $scope.dishes = "";  
  $scope.message = "";
    
  $scope.checkLunch = function(){      
      if ($scope.dishes.length < 1){
          $scope.message = "Enter data first!";
      } else{
          var res = $scope.dishes.split(",");
          if (res.length<4){
            $scope.message = "Enjoy!";
          } else{
            $scope.message = "Too much!";
          }
      }
  }
    
});
})();
