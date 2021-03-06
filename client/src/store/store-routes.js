(function(){
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('store', {
                url: '',
                abstract: true,
                views:{
                    '':{
                        templateUrl: 'store/store-base.html',
                        controller: 'StoreController',
                        controllerAs: 'storeCtrl',
                        resolve: {
                            cart: resolveCart,
                            categories: resolveCategories
                        }
                    },
                    'navigation@store': {
                        templateUrl: 'store/components/header/header.html',
                        controller: 'HeaderController',
                        controllerAs: 'headerCtrl'
                    },
                    'footer@store': {
                        templateUrl: 'store/components/footer/footer.html',
                        controller: 'FooterController',
                        controllerAs: 'footerCtrl'
                    }
                }
            })
            .state('store.main', {
                url: '/',
                views: {
                    'content@store': {
                        templateUrl: 'store/main/main.html',
                        // templateUrl: 'dashboard/user/design/design.html',
                        controller: 'MainController',
                        controllerAs: 'mainCtrl',
                        resolve: {
                            items: resolveItems
                        }
                    }
                }
            })
            .state('store.support', {
                url : '/support',
                views: {
                    'content@store': {
                        templateUrl: 'store/support/support.html',
                        controller: 'SupportController',
                        controllerAs: 'SupportCtrl',
                        // resolve: {
                        //     item: resolveItem
                        // }
                    }
                }
            })
            .state('store.design', {
                url: '/design',
                views: {
                    'content@store': {
                        // templateUrl: 'store/category-items/category-items.html',
                        templateUrl: 'dashboard/user/design/design.html',
                        controller: 'DesignController',
                        controllerAs: 'DesignCtrl',
                    }
                }
            })
            .state('store.item', {
                url: '/items/{id}',
                views: {
                    'content@store': {
                        templateUrl: 'store/single-item/single-item.html',
                        controller: 'SingleItemController',
                        controllerAs: 'singleItemCtrl',
                        resolve: {
                            item: resolveItem
                        }
                    }
                }
            })
            .state('store.category', {
                url: '/category/{category}',
                views: {
                    'content@store': {
                        templateUrl: 'store/category-items/category-items.html',
                        // templateUrl: 'dashboard/user/design/design.html',
                        controller: 'CategoryItemsController',
                        controllerAs: 'catItemsCtrl',
                        resolve: {
                            items: resolveCategoryItems
                        }
                    }
                }
            })
            .state('store.cart', {
                url: '/cart/',
                views: {
                    'content@store': {
                        templateUrl: 'store/cart/cart.html',
                        controller: 'CartController',
                        controllerAs: 'cartCtrl'
                    }
                }
            })
            .state('store.checkout', {
                url: '/checkout',
                views: {
                    'content@store': {
                        templateUrl: 'store/checkout/checkout.html',
                        controller: 'CheckoutController',
                        controllerAs: 'checkoutCtrl',
                        resolve: {
                            user: resolveUserData,
                            cart: resolveCart
                        }
                    }
                }
            })
            .state('store.checkout.success', {
                url: '/success',
                views: {
                    'content@store': {
                        templateUrl: 'store/checkout/success/success-checkout.html',
                        controller: 'CheckoutController',
                        controllerAs: 'checkoutCtrl',
                        resolve: {
                            user: resolveUserData,
                            cart: resolveCart
                        }
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

        function resolveItems(ItemsService){
            return ItemsService.getAll();
        }

        function resolveItem($stateParams, ItemsService){
            return ItemsService.getItem($stateParams.id);
        }

        function resolveCart(CartService){
            return CartService.getCart();
        }


        function resolveCategories(CategoriesService){
            return CategoriesService.getAll();
        }

        function resolveCategoryItems($stateParams, ItemsService){
            return ItemsService.filterByCategory($stateParams.category);
        }

        function resolveUserData(UsersService){
            var payload = UsersService.getUserPayload();
            if(payload){
                return UsersService.getUserData(payload._id).then(function(response){
                    return response.data;
                });
            }
        }

    }
})();