(function(){
    'use strict';

    angular
        .module('app')
        .controller('SupportController', SupportController);

    function SupportController(){

        var vm = this;

        // angular.extend(vm, {
        //     cart: cart,
        //     categories: categories,
        //     addToCart: addToCart,
        //     buyNow: buyNow
        // });


        // function addToCart(item){
        //     CartService.addToCart(item).then(function(cart){
        //         vm.cart = cart;
        //     });
        // }

        // function buyNow(item){
        //     CartService.addToCart(item).then(function(cart){
        //         vm.cart = cart;
        //         $state.go('store.checkout');
        //     });
        // }

    }

})();