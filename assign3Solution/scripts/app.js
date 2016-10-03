(function () {

    'use strict';
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuCategoriesService', MenuCategoriesService)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItems);

    function FoundItems() {
      var ddo = {
       templateUrl: 'loader/itemsloaderindicator.template.html',
       scope: {
          inItems: '<',         // One way binding, changes in parent controller will be synched here
          myHeader: '@header',  // Getting parameter from the parent
          deleteItem: '&'       // Hook to give me access to parent's method
       }
      };
      return ddo;
    }
    
    NarrowItDownController.$inject = ['MenuCategoriesService'];        
    function NarrowItDownController(MenuCategoriesService){
        
        var controller = this;
        controller.filterText = '';
        controller.found = [];
        
        controller.getMatchedMenuItems = function () {            
            var promise = MenuCategoriesService.getMenuCategories();
            promise.then(function(response){controller.filterMenuItems(response.data);}
            ).catch(function (error) {
                console.log(error);
            })            
        };
        
        controller.filterMenuItems = function(fullList){            
            var i;
            controller.found = [];   // Initialize it //
            for (i = 0; i < fullList.length; i++) { 
                var currentInstance = fullList[i];                
                if (currentInstance.name.toLowerCase().includes(controller.filterText.toLowerCase())){
                    controller.found.push(currentInstance);
                }
            }
        };        
        
        controller.delete = function(index){
            controller.found.splice(index, 1);
        }
    }
    
    MenuCategoriesService.$inject = ['$http', 'ApiBasePath']
    function MenuCategoriesService($http, ApiBasePath) {
      var service = this;
      service.getMenuCategories = function () {
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/categories.json")
        });
        return response;
      };
    }
})();
