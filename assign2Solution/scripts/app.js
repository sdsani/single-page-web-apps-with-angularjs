(function () {

    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService){
        var controller = this;
        
        controller.cart   = ShoppingListCheckOffService.getCart();        
        controller.buy = function(index){
            ShoppingListCheckOffService.buy(index);
        }
    }
    
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
        var bController = this;        
        bController.bought = ShoppingListCheckOffService.getBought();
    }
    
    function ShoppingListCheckOffService(){
        
        var service = this;
        var cart   = [
          { name: "Milk",quantity: "2"},
          { name: "Donuts",quantity: "200"},
          { name: "Cookies", quantity: "300"},
          { name: "Chocolate", quantity: "5"},
          { name: "Tea", quantity: "4"}
            ];
        var bought = [];
        
        service.buy = function(index){
            bought.push(cart[index]);
            cart.splice(index, 1);
        };
        
        service.getCart = function(){
            return cart;
        }
        
        service.getBought = function(){
            return bought;
        }
    }
    
})();
