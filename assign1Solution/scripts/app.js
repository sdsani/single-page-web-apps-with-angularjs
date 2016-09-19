(function () {
'use strict';

angular.module('AssignmentOneModule', [])
.controller('AssignmentOneController', AssignmentOneController);

// This approach is to save java script code from minification //
AssignmentOneController.$inject = ['$scope'];
    
function AssignmentOneController($scope){
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
    
};
    
})();
