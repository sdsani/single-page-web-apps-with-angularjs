(function () {

    'use strict';
    angular.module('ShopingCartModule', [])
    .controller('ShopingCartController', ShopingCartController)
    .controller('BoughtController', BoughtController)
    .provider('SCartService', ShopingCartServiceProvider)
    .config(Config);

    Config.$inject = ['SCartServiceProvider'];    
    function Config(SCartServiceProvider){
       SCartServiceProvider.shopingCart = [
          { name: "Milk",quantity: "2"},
          { name: "Donuts",quantity: "200"},
          { name: "Cookies", quantity: "300"},
          { name: "Chocolate", quantity: "5"},
          { name: "Tea", quantity: "4"}
        ];
    }
    
    ShopingCartController.$inject = ['SCartService'];
    function ShopingCartController(SCartService){
        var controller = this;
        
        controller.cart   = SCartService.getCart();        
        controller.buy = function(index){
            SCartService.buy(index);
        }
    }
    
    BoughtController.$inject = ['SCartService'];
    function BoughtController(SCartService){
        var bController = this;        
        bController.bought = SCartService.getBought();
    }
    
    function ShopingCartServiceProvider(){
        var provider = this;
        provider.shopingCart = [];
        
        provider.$get = function(){
            return new SCartService(provider.shopingCart);
        }
    }
    
    function SCartService(shopingCart){
        
        var service = this;
        var cart   = shopingCart;
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
